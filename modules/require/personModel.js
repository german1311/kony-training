/* jshint esnext: true */
define(() => {
    /**
     * http://docs.kony.com/konylibrary/konyfabric/offline_objectsapi_reference_guide/Content/Object_Level.htm
     */
    return class PersonModel {
        constructor(personObject) {
            if (!personObject) {
                throw "An instance of kony.sdk.KNYObj for PersonObject is required";
            }
            this.personObject = personObject;
        }

        /**
         * upload and download person
         * @param {*} options 
         * @param { call back } onSyncProgress 
         */
        startSync(options = {
            'downloadBatchSize': 50,
            'uploadBatchSize': 20
        }, onSyncProgress = null) {
            var promise = new Promise((resolve, reject) => {
                this.personObject.startSync(options, ()=>{
                  console.log("syncronized");
                  resolve();
                }, reject, onSyncProgress);
            });

            return promise;
        }

        /**
         * get persons all person if no options sent
         * @param {filter options optional} options 
         */
        get(options = null) {
            var personPromise = new Promise((resolve, reject) => {
                this.personObject.get(options, resolve, reject);
            });

            return personPromise;
        }

        /**
         * find a person by first name
         * @param { person first name text content } inputText 
         */
        findPerson(inputText) {
            var options = {
                likeCondition: {
                    "FirstName": `%${inputText}%`
                    //,"LastName": `%${inputText}%`
                }
            };

            return this.get(options);
        }

        /**
         * Find a person by Id
         * @param { personId } id 
         * return an array
         */
        findPersonById(id) {
            var options = {
                primaryKeys: {
                    "Id": id,
                }
            };

            return this.get(options);
        }

        /**
         * Create or update a person
         * @param {*} person
         */
        save(person) {
            let savePromise = new Promise((resolve, reject) => {
                if (person.Id) {
                    let options = {
                        primaryKeys: {
                            Id: person.Id,
                        },
                        markForUpload: true
                    }
                    this.personObject.updateByPK(person, options, resolve, reject);
                } else {
                    let options = {};
                    person.Id = 1;
                    this.personObject.create(person, options, resolve, reject);
                }

            });

            return savePromise;
        }

        /**
         * Delete a person by Id
         * @param {*} id 
         */
        delete(id) {
            let deletePromise = new Promise((resolve, reject) => {
                const options = {
                    primaryKeys: {
                        Id: id
                    }
                };

                this.personObject.deleteByPK(options, resolve, reject);
            });

            return deletePromise;
        }
    }
});