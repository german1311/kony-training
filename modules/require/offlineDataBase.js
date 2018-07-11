/* jshint esnext: true */

define(() => {
    return class OfflineDataBase {
        constructor() {
            this.isReady = false;
        }
        setup(options = {}) {
            var self = this;
            var promise = new Promise((resolve, reject) => {
                KNYMobileFabric.OfflineObjects.setup(options, () => {
                    resolve();
                    self.isReady = true;
                }, reject);
            });

            return promise;
        }

        performObjectService(offLineObjectServiceName, options = {
            "access": "offline"
        }) {
            return kony.sdk.getCurrentInstance().getObjectService(offLineObjectServiceName, options);
        }

        ifIsReady(secondsToWait = 5) {
            var self = this;
            let promise = new Promise((resolve, reject) => {
                kony.timer.schedule("idTimer", () => {
                    secondsToWait--;
                    console.log(`create DataBase try: ${secondsToWait}`);
                    if (self.isReady) { //no exists
                        resolve();
                        kony.timer.cancel("idTimer");
                        console.log("timer canceled");
                        return;
                    }

                    if (secondsToWait === 0) {
                        reject(`time out ${secondsToWait} seconds`);
                        kony.timer.cancel("idTimer");
                        console.log("timer canceled");
                    }
                }, 1, true);
            });

            return promise;
        }
    };
});