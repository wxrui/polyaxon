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
* Enum class V1ArtifactKind.
* @enum {}
* @readonly
*/
export default class V1ArtifactKind {
    
        /**
         * value: "model"
         * @const
         */
        "model" = "model";

    
        /**
         * value: "audio"
         * @const
         */
        "audio" = "audio";

    
        /**
         * value: "video"
         * @const
         */
        "video" = "video";

    
        /**
         * value: "histogram"
         * @const
         */
        "histogram" = "histogram";

    
        /**
         * value: "image"
         * @const
         */
        "image" = "image";

    
        /**
         * value: "tensor"
         * @const
         */
        "tensor" = "tensor";

    
        /**
         * value: "dataframe"
         * @const
         */
        "dataframe" = "dataframe";

    
        /**
         * value: "chart"
         * @const
         */
        "chart" = "chart";

    
        /**
         * value: "csv"
         * @const
         */
        "csv" = "csv";

    
        /**
         * value: "tsv"
         * @const
         */
        "tsv" = "tsv";

    
        /**
         * value: "psv"
         * @const
         */
        "psv" = "psv";

    
        /**
         * value: "ssv"
         * @const
         */
        "ssv" = "ssv";

    
        /**
         * value: "metric"
         * @const
         */
        "metric" = "metric";

    
        /**
         * value: "env"
         * @const
         */
        "env" = "env";

    
        /**
         * value: "html"
         * @const
         */
        "html" = "html";

    
        /**
         * value: "text"
         * @const
         */
        "text" = "text";

    
        /**
         * value: "file"
         * @const
         */
        "file" = "file";

    
        /**
         * value: "dir"
         * @const
         */
        "dir" = "dir";

    
        /**
         * value: "dockerfile"
         * @const
         */
        "dockerfile" = "dockerfile";

    
        /**
         * value: "docker_image"
         * @const
         */
        "docker_image" = "docker_image";

    
        /**
         * value: "data"
         * @const
         */
        "data" = "data";

    
        /**
         * value: "coderef"
         * @const
         */
        "coderef" = "coderef";

    
        /**
         * value: "table"
         * @const
         */
        "table" = "table";

    
        /**
         * value: "tensorboard"
         * @const
         */
        "tensorboard" = "tensorboard";

    
        /**
         * value: "curve"
         * @const
         */
        "curve" = "curve";

    

    /**
    * Returns a <code>V1ArtifactKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ArtifactKind} The enum <code>V1ArtifactKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

