/* jshint esnext: true */

define(() => {
    return class OfflineDataBase {
        constructor() {
            this.isUp = false;
        }
        setup(options = {}) {
            var self = this;
            var promise = new Promise((resolve, reject) => {
                KNYMobileFabric.OfflineObjects.setup(options, () => {
                    self.isUp = true;
                    resolve()
                }, reject);
            });

            return promise;
        }

        performObjectService(offLineObjectServiceName, options = {
            "access": "offline"
        }) {
            return kony.sdk.getCurrentInstance().getObjectService(offLineObjectServiceName, options);
        }
    };
});