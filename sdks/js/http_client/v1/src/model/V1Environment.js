// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.87
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Environment model module.
 * @module model/V1Environment
 * @version 1.0.87
 */
class V1Environment {
    /**
     * Constructs a new <code>V1Environment</code>.
     * @alias module:model/V1Environment
     */
    constructor() { 
        
        V1Environment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Environment} obj Optional instance to populate.
     * @return {module:model/V1Environment} The populated <code>V1Environment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Environment();

            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
            if (data.hasOwnProperty('node_selector')) {
                obj['node_selector'] = ApiClient.convertToType(data['node_selector'], {'String': 'String'});
            }
            if (data.hasOwnProperty('affinity')) {
                obj['affinity'] = ApiClient.convertToType(data['affinity'], Object);
            }
            if (data.hasOwnProperty('tolerations')) {
                obj['tolerations'] = ApiClient.convertToType(data['tolerations'], [Object]);
            }
            if (data.hasOwnProperty('node_name')) {
                obj['node_name'] = ApiClient.convertToType(data['node_name'], 'String');
            }
            if (data.hasOwnProperty('service_account_name')) {
                obj['service_account_name'] = ApiClient.convertToType(data['service_account_name'], 'String');
            }
            if (data.hasOwnProperty('host_aliases')) {
                obj['host_aliases'] = ApiClient.convertToType(data['host_aliases'], [Object]);
            }
            if (data.hasOwnProperty('security_context')) {
                obj['security_context'] = ApiClient.convertToType(data['security_context'], Object);
            }
            if (data.hasOwnProperty('image_pull_secrets')) {
                obj['image_pull_secrets'] = ApiClient.convertToType(data['image_pull_secrets'], ['String']);
            }
            if (data.hasOwnProperty('host_network')) {
                obj['host_network'] = ApiClient.convertToType(data['host_network'], 'Boolean');
            }
            if (data.hasOwnProperty('dns_policy')) {
                obj['dns_policy'] = ApiClient.convertToType(data['dns_policy'], 'String');
            }
            if (data.hasOwnProperty('dns_config')) {
                obj['dns_config'] = ApiClient.convertToType(data['dns_config'], Object);
            }
            if (data.hasOwnProperty('scheduler_name')) {
                obj['scheduler_name'] = ApiClient.convertToType(data['scheduler_name'], 'String');
            }
            if (data.hasOwnProperty('priority_class_name')) {
                obj['priority_class_name'] = ApiClient.convertToType(data['priority_class_name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('restart_policy')) {
                obj['restart_policy'] = ApiClient.convertToType(data['restart_policy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} labels
 */
V1Environment.prototype['labels'] = undefined;

/**
 * @member {Object.<String, String>} annotations
 */
V1Environment.prototype['annotations'] = undefined;

/**
 * @member {Object.<String, String>} node_selector
 */
V1Environment.prototype['node_selector'] = undefined;

/**
 * @member {Object} affinity
 */
V1Environment.prototype['affinity'] = undefined;

/**
 * Optional Tolerations to apply.
 * @member {Array.<Object>} tolerations
 */
V1Environment.prototype['tolerations'] = undefined;

/**
 * Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
 * @member {String} node_name
 */
V1Environment.prototype['node_name'] = undefined;

/**
 * @member {String} service_account_name
 */
V1Environment.prototype['service_account_name'] = undefined;

/**
 * Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.
 * @member {Array.<Object>} host_aliases
 */
V1Environment.prototype['host_aliases'] = undefined;

/**
 * @member {Object} security_context
 */
V1Environment.prototype['security_context'] = undefined;

/**
 * @member {Array.<String>} image_pull_secrets
 */
V1Environment.prototype['image_pull_secrets'] = undefined;

/**
 * Host networking requested for this workflow pod. Default to false.
 * @member {Boolean} host_network
 */
V1Environment.prototype['host_network'] = undefined;

/**
 * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
 * @member {String} dns_policy
 */
V1Environment.prototype['dns_policy'] = undefined;

/**
 * @member {Object} dns_config
 */
V1Environment.prototype['dns_config'] = undefined;

/**
 * @member {String} scheduler_name
 */
V1Environment.prototype['scheduler_name'] = undefined;

/**
 * If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
 * @member {String} priority_class_name
 */
V1Environment.prototype['priority_class_name'] = undefined;

/**
 * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
 * @member {Number} priority
 */
V1Environment.prototype['priority'] = undefined;

/**
 * @member {String} restart_policy
 */
V1Environment.prototype['restart_policy'] = undefined;






export default V1Environment;

