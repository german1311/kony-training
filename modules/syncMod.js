var PersonServiceConfig = {
    name: "PersonService",
    objects: {
        person: {
            name: "Person"
        }
    }
};


var dataBase;
var personObjectService;
var personModel;


/**
 * Initialize variables
 */
const setupSync = () => {
    var DataBaseClass = require("offlineDataBase");
    
    kony.logger.activatePersistors(kony.logger.consolePersistor);
    kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
  
    this.dataBase = new DataBaseClass();
  
    return dataBase.setup();
};