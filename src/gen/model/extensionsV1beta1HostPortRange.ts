/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
*/
export class ExtensionsV1beta1HostPortRange {
    /**
    * max is the end of the range, inclusive.
    */
    'max': number;
    /**
    * min is the start of the range, inclusive.
    */
    'min': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1HostPortRange.attributeTypeMap;
    }
}

