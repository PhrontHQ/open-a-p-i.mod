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
exports.OpenAPIEndPointPathParameter = class OpenAPIEndPointPathParameter extends Montage {/** @lends OpenAPIDescriptor */


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
     * @returns {boolean} - 
     */

    isInline;

    /**
     * The name/identifter of the parameter
     *
     * @property
     *
     * @returns {boolean} - 
     */

    key;

    /**
     * The description of the value to be used for the parameter's key
     *
     * @property
     *
     * @returns {ProperyDescriptor} - 
     */
    valueDescriptor
    
    /**
     * The ObjectDescriptor describing the Raw type handles by 
     *
     * @property
     *
     * @returns {ObjectDescriptor} - 
     */

    /**
     * The endpoint that parameter is associated with
     *
     * @property
     *
     * @returns {OpenAPIEndPointDescriptor} - 
     */

    endpoint;




}
