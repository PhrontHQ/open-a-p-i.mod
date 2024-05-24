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
* A subclass of RawDataService to interface with API conforming to OpenAPI/Swagger
* The package we use, 
*
* @class
* @extends Montage
*/
exports.OpenAPIDescriptor = class OpenAPIDescriptor extends Montage {/** @lends OpenAPIDescriptor */


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

    initWithURL(jsonDocURL) {

    }

    /**
     * initialize itself from the json document returned by the open API assigned to the instance via the jsonDocURL.
     *
     * @method
     *
     * @returns {void} - 
     */

    _loadAPIDoc(jsonDoc) {

    }
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
