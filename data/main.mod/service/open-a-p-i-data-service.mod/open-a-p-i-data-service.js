const RawDataService = require("mod/data/service/raw-data-service").RawDataService,
    Montage = require('mod/core/core').Montage,
    //SyntaxInOrderIterator = (require)("mod/core/frb/syntax-iterator").SyntaxInOrderIterator,
    DataOperation = require("mod/data/service/data-operation").DataOperation;
var rawClient;

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
* @extends RawDataService
*/
exports.OpenAPIDataService = class OpenAPIDataService extends RawDataService {/** @lends OpenAPIDataService */


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

    get rawClientPromises() {
        var promises = super.rawClientPromises;

        /*
            This lazy load allows to reduce cold-start time, but to kick-start load of code in the phase that's not billed, at least on AWS
        */

        promises.push(
            require.async("swagger-client").then((exports/*SwaggerClient*/) => {
                this._rawClient = exports;
                return this._rawClient;
            })
        );
        /*
            AbortController is part of modern Web APIs. No need to install it if we're in a browser.
        */
        if(typeof AbortController === "undefined") {
            promises.push(
                require.async("abort-controller").then((AbortController /*exports*/) => {
                    this._abortCcontroller = new AbortController;

                    /* this is needed to send requests */
                    // const { signal } = this._abortCcontroller;
                    return this._rawClient;
                })
            );    
        } else {
            this._abortCcontroller =  new AbortController();
        }


        return promises;
    }

    handleCreateTransactionOperation(createTransactionOperation) {
        /*
            API typically doesn't have the notion of transaction, but we still need to find a way to make it work.
            TODO: For example, a Rollback would mean deleting what had been created.
        */
    }

    handleReadOperation(readOperation) {
        /*
            Until we solve more efficiently (lazily) how RawDataServices listen for and receive data operations, we have to check wether we're the one to deal with this:
        */
        if(!this.handlesType(readOperation.target)) {
            return;
        }

        //console.log("S3DataService - handleObjectReadOperation");

        var self = this,
            data = readOperation.data,
            objectDescriptor = readOperation.target,
            mapping = objectDescriptor && this.mappingForType(objectDescriptor),
            primaryKeyPropertyDescriptors = mapping && mapping.primaryKeyPropertyDescriptors,

            criteria = readOperation.criteria,
            parameters = criteria.parameters,
            // iterator = new SyntaxInOrderIterator(criteria.syntax, "property"),
            rawData,
            promises,
            operation;

        /* 
            TODO: using the JSON API description, we need to map objectDescriptor.name 
            to the Raw API equivallent, as well as the right format in the URL, 
            and mapping the readOperation's criteria to the equivalent for the OpenAPI
        */

        //Add to a promises array the promise returning data from the API


        if(promises) {
            Promise.all(promises)
            .then(function(resolvedValue) {
                operation = self.responseOperationForReadOperation(readOperation, null, [rawData], false/*isNotLast*/);
                objectDescriptor.dispatchEvent(operation);
            }, function(error) {
                operation = self.responseOperationForReadOperation(readOperation, error, null, false/*isNotLast*/);
                objectDescriptor.dispatchEvent(operation);
            })
        } else {
            if(!rawData || (rawData && Object.keys(rawData).length === 0)) {
                operation = new DataOperation();
                operation.type = DataOperation.Type.NoOp;
            } else {
                operation = self.responseOperationForReadOperation(readOperation, null /*no error*/, [rawData], false/*isNotLast*/);
            }
            objectDescriptor.dispatchEvent(operation);
        }
    }

}
