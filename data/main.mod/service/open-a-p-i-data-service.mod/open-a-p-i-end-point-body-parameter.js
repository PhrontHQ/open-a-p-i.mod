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
* TODO, 
*
* @class
* @extends Montage
*/
exports.OpenAPIEndPointBodyParameter = class OpenAPIEndPointBodyParameter extends Montage {/** @lends OpenAPIDescriptor */


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

    /**
     * TODO
     *
     * @property
     *
     * @returns {Array<RawDataObject>}
     */

    templateRawDataObjects;

    /**
     * The endpoint that parameter is associated with
     *
     * @property
     *
     * @returns {OpenAPIEndPointDescriptor} - 
     */

    endpoint;




}
