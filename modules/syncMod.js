var PersonServiceConfig = {
    name: "PersonService",
    objects: {
        person: {
            name: "Person"
        }
    }
};

var service = null;
var personObject = null;

function onSetupSucess(data) {
    if (!service) {
        //var serviceName = "PersonService";
	    var serviceType = "offline";
        service = kony.sdk.getCurrentInstance().getObjectService(PersonServiceConfig.name, {"access": serviceType});
      
        //service = new kony.sdk.KNYObjSvc(PersonServiceConfig.name);
    }

    if (!personObject) {
        personObject = new kony.sdk.KNYObj(PersonServiceConfig.objects.person.name);
    }

    kony.print("Setup Success");
  	performSyncOnPersons();
  	kony.print("sync success");
  	
}

function onFailed(err) {
    var errorMessage = !!!err ? "" : JSON.stringify(err);

    alert("something went wrong " + errorMessage);
}

function setupSync() {
    kony.logger.activatePersistors(kony.logger.consolePersistor);
    kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
    //var options = {"deviceDbEncryptionKey" : "myencryptionpa$$phrase1"};
    var options = {};
    KNYMobileFabric.OfflineObjects.setup(options, onSetupSucess, onFailed);
}

function performSyncOnPersons(){
  var options = {
    'downloadBatchSize': 50,
    'uploadBatchSize': 20
  };
  
  personObject.startSync(options, onSyncSuccess.bind(this), onFailed.bind(this), onSyncProgress.bind(this));
}

function onSyncSuccess(){
  kony.print("Sync on persons object Succeded");  
}

function onSyncProgress(object){
    kony.print(JSON.stringify(object));
}