# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import sys

import click
import polyaxon_sdk

from polyaxon_sdk.rest import ApiException

from polyaxon.cli.version import (
    get_current_version,
    get_log_handler,
    get_server_versions,
)
from polyaxon.client import PolyaxonClient
from polyaxon.logger import clean_outputs, logger
from polyaxon.managers.auth import AuthConfigManager
from polyaxon.managers.cli import CliConfigManager
from polyaxon.schemas.api.authentication import AccessTokenConfig
from polyaxon.utils.formatting import Printer


@click.command()
@click.option("--token", "-t", help="Polyaxon token.")
@click.option("--username", "-u", help="Polyaxon username or email.")
@click.option("--password", "-p", help="Polyaxon password.")
@clean_outputs
def login(token, username, password):
    """Login to Polyaxon."""
    polyaxon_client = PolyaxonClient()
    if username:
        # Use user or email / password login
        if not password:
            password = click.prompt(
                "Please enter your password", type=str, hide_input=True
            )
            password = password.strip()
            if not password:
                logger.info(
                    "You entered an empty string. "
                    "Please make sure you enter your password correctly."
                )
                sys.exit(1)

        try:
            body = polyaxon_sdk.models.V1CredsBodyRequest(
                username=username, password=password
            )
            access_auth = polyaxon_client.auth_v1.login(body=body)
        except ApiException as e:
            Printer.print_error("Could not login.")
            Printer.print_error("Error Message `{}`.".format(e))
            sys.exit(1)

        if not access_auth.token:
            Printer.print_error("Failed to login")
            return
    else:
        if not token:
            token_url = "{}/app/token".format(polyaxon_client.config.host)
            click.confirm(
                "Authentication token page will now open in your browser. Continue?",
                abort=True,
                default=True,
            )

            click.launch(token_url)
            logger.info("Please copy and paste the authentication token.")
            token = click.prompt(
                "This is an invisible field. Paste token and press ENTER",
                type=str,
                hide_input=True,
            )

        if not token:
            logger.info(
                "Empty token received. "
                "Make sure your shell is handling the token appropriately."
            )
            logger.info(
                "See docs for help: http://docs.polyaxon.com/polyaxon_cli/commands/auth"
            )
            return

        access_auth = polyaxon_sdk.models.V1Auth(token=token.strip(" "))

    # Set user
    try:
        AuthConfigManager.purge()
        polyaxon_client = PolyaxonClient(token=access_auth.token)
        user = polyaxon_client.users_v1.get_user()
    except ApiException as e:
        Printer.print_error("Could not load user info.")
        Printer.print_error("Error message `{}`.".format(e))
        sys.exit(1)
    access_token = AccessTokenConfig(username=user.username, token=access_auth.token)
    AuthConfigManager.set_config(access_token)
    Printer.print_success("Login successful")

    # Reset current cli
    server_versions = get_server_versions(polyaxon_client=polyaxon_client)
    current_version = get_current_version()
    log_handler = get_log_handler()
    CliConfigManager.reset(
        check_count=0,
        current_version=current_version,
        server_versions=server_versions.to_dict(),
        log_handler=log_handler,
    )


@click.command()
@clean_outputs
def logout():
    """Logout of Polyaxon."""
    AuthConfigManager.purge()
    CliConfigManager.purge()
    Printer.print_success("You are logged out")


@click.command()
@clean_outputs
def whoami():
    """Show current logged Polyaxon user."""
    try:
        polyaxon_client = PolyaxonClient()
        user = polyaxon_client.users_v1.get_user()
    except ApiException as e:
        Printer.print_error("Could not load user info.")
        Printer.print_error("Error message `{}`.".format(e))
        sys.exit(1)
    click.echo("\nUsername: {username}, Email: {email}\n".format(**user.to_dict()))
