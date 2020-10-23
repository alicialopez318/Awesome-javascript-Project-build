/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1ScopedResourceSelectorRequirement } from './v1ScopedResourceSelectorRequirement';

/**
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
*/
export class V1ScopeSelector {
    /**
    * A list of scope selector requirements by scope of the resources.
    */
    'matchExpressions'?: Array<V1ScopedResourceSelectorRequirement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1ScopedResourceSelectorRequirement>"
        }    ];

    static getAttributeTypeMap() {
        return V1ScopeSelector.attributeTypeMap;
    }
}

