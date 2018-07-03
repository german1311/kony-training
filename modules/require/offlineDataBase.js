/* jshint esnext: true */

define(() => {
    return class OfflineDataBase {
        setup(options = {}) {
            var promise = new Promise((resolve, reject) => {
                KNYMobileFabric
                    .OfflineObjects
                    .setup(options, resolve, reject);
            });

            return promise;
        }

        performObjectService(offLineObjectServiceName, options = {
            "access": "offline"
        }) {
            return kony.sdk.getCurrentInstance().getObjectService(offLineObjectServiceName, options);
        }

        /** return the status of the data Base, 
         * if its false, make sure to have called setup method 
         * */
        status() {
            return {
                online: true
            };
        }
    };
});