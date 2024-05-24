const RawDataService = require("mod/data/service/raw-data-service").RawDataService,
    Montage = require('mod/core/core').Montage,
    //SyntaxInOrderIterator = (require)("mod/core/frb/syntax-iterator").SyntaxInOrderIterator,
    DataOperation = require("mod/data/service/data-operation").DataOperation;
var rawlient;

    /*
        https://github.com/swagger-api/swagger-js?tab=readme-ov-file

        See 
        https://github.com/swagger-api/swagger-js/blob/master/docs/usage/http-client-for-oas-operations.md
    */

/**
* Document me! 
*
* @class
* @extends Montage
*/
exports.OpenAPIEndPointDescriptor = class OpenAPIEndPointDescriptor extends Montage {/** @lends OpenAPIDescriptor */


    /***************************************************************************
     * Initializing
     */

    constructor() {
        super();

        return this;
    }

    static {

        Montage.defineProperties(this.prototype, {
            apiVersion: {
                value: "FROM AWS, NECESSARY FOR GCP?"
            }
        });
    }

    initWithObjectRawObjectDescriptorAndMethod(rawObjectDescriptor, httpMethod) {
        this.rawObjectDescriptor = rawObjectDescriptor;
        this.httpMethod = httpMethod;
        return this;
    }

    /**
     * initialize itself from the json document returned by the open API assigned to the instance via the jsonDocURL.
     *
     * @propery
     *
     * @returns {void} - 
     */

    rawObjectDescriptor;

    /**
     * The HTTP method used by that endpoint: GET, POST, etc...
     *
     * @property
     *
     * @returns {String} - 
     */

    httpMethod;

    /**
     * The host where data come from.
     *
     * @property
     *
     * @returns {String} - 
     */
    host;

    /**
     * The ObjectDescriptor describing the Raw type handles by 
     *
     * @property
     *
     * @returns {ObjectDescriptor} - 
     */

    rawObjectDesctiptor;
    endpoints;




}
