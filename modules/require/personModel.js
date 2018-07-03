/* jshint esnext: true */

define(() => {
    return class PersonModel {
        constructor(personObject) {
            if (!personObject) {
                throw "An instance of kony.sdk.KNYObj for PersonObject is required";
            }
            this.personObject = personObject;
        }

        startSync(options = {
            'downloadBatchSize': 50,
            'uploadBatchSize': 20
        }, onSyncProgress = null) {
            var promise = new Promise((resolve, reject) => {
                this.personObject.startSync(options, resolve, reject, onSyncProgress);
            });

            return promise;
        }

        getAsync() {
            var personPromise = new Promise((resolve, reject) => {
                this.personObject.get(null, resolve, reject);
            });

            return personPromise;
        }

        findPerson(inputText) {
            var reg = new RegExp(inputText, "i");
            //todo: should look at personObject
            var personFound = this.personsData.filter(function(item) {
                return (item.FirstName.match(reg) ||
                    item.LastName.match(reg));
            });

            return personFound ? personFound[0] : null;
        }

        findPersonById(id) {
            //todo: should look at personObject
            var personFound = this.personsData.filter(function(item) {
                return (item.Id == id);
            });

            return personFound;
        }
    }
});