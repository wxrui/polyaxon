---
title: "Organizations"
sub_link: "ui/organizations"
meta_title: "Polyaxon management tools and UI - Organizations"
meta_description: "Organizations are an entity where businesses can collaborate across many projects at once."
tags:
    - concepts
    - polyaxon
    - management
sidebar: "management"
---

<blockquote class="commercial">This is part of our commercial offering.</blockquote>

Organizations are an entity where businesses can collaborate across many projects at once. 
Owners and administrators can manage member access to the organization's data, projects, models, and components with sophisticated security and administrative features.
Organization can also have analytics, activities, and insights. 

## Create new organization

If you have access you can create a new organization.

![organization-create](../../../../content/images/dashboard/orgs/create.png)

## Selecting an organization

Users can be members of multiple organizations, 
you can visit your organization's dashboard to stay updated on recent activity and keep track of recent changes.

![organization-select](../../../../content/images/dashboard/orgs/select.png)

## Organization overview

Every organization can manage Projects, a Model Registry, and a Component Hub.

![organization-overview](../../../../content/images/dashboard/orgs/overview.png)

## Organization settings

The organization settings page provides several tabs to manage the account, members, teams, agents, connections, ...

![organization-settings-select](../../../../content/images/dashboard/orgs/settings-select.png)

The general settings page lets you change the organization's details

![organization-settings](../../../../content/images/dashboard/orgs/settings.png)


## Organization members

After creating an organization, 
you can invite or remove members of your organization.

![organization-invite](../../../../content/images/dashboard/orgs/invite.png)

You can also update their roles.

![organization-roles](../../../../content/images/dashboard/orgs/roles.png)


## Organization roles

Member roles dictate access within an organization.

### Owner

Unrestricted access to the organization, its data, and settings.

 * Gains full permission across the organization. 
 * Can add, modify, and delete projects, components, models, and members.
 * Can manage members.
 * Can make billing and plan changes.
 * Can delete an organization.


### Admin

 * Admin privileges on any teams of which they're a member.
 * They can create new teams and projects.
 * Can remove teams and projects which they already hold membership on.

### Member

 * Members can view and act on experiments/jobs/builds/services/pipelines.
 * Can view most other data within the organization.

### Outsider

 * Outsider is a person who isn't explicitly a member of your organization.
 * Outsider can Read, Write, or Admin permissions to one or more projects in your organization if invited.


## Organization Management

An organization can be further tuned to reflect the kind of access and scale you want to achieve. 

 * You can create and manage projects.
 * You can manage the component hub.
 * You can manage the model registry.
 * You can create and manage agents to isolate and scale your workload over multiple namespaces and clusters.
