/* jshint esnext: true */
define({

    //Type your controller code here 

    populateSegment: function(rowData) {
        var dataFormatted = [];
        for (var i = 0; i < rowData.length; i++) {
            const element = rowData[i];
            dataFormatted[i] = {
                imgProfile: "option3.png",
                lblFullName: element.FirstName + " " + element.LastName,
                lblStatus: element.Active ? "" : "Off",
                primaryKey: element.Id
            };
        }

        this.view.segPersons.data = dataFormatted;
    },
    onPersonsClick: function() {
        var self = this;

        personModel.getAsync().then((data) => {
            self.populateSegment(data);
            self.view.mainContainer.setActiveFooterMenu(1);
        }).catch(Util.logError);
    },
    onSyncClick: function() {
        this.view.mainContainer.setActiveFooterMenu(2);
    },
    onExportClick: function() {
        this.view.mainContainer.setActiveFooterMenu(3);
    },
    onDoneSearchText: function(e, ar) {
        var self = this;
        if (!e.text) {
            this.onPersonsClick();
            this.view.search.disableFullInput();
            return;
        }

        personModel.findPerson(e.text).then((data) => {
            self.populateSegment(data);
        });
    },
    onRowSegmentClick: function(eventObject, rowNumber) {
        var editForm = new kony.mvc.Navigation("frmEditPerson");

        editForm.navigate(eventObject.selectedRowItems[0]);
    },
    onInit: function() {
        let PersonModelClass = require("personModel");
        var self = this;
        setupSync().then(() => {
                if (!personObjectService) {
                    personObjectService = dataBase.performObjectService(PersonServiceConfig.name, {
                        "access": "offline"
                    });
                }

                if (!personModel) {
                    personModel = new PersonModelClass(new kony.sdk.KNYObj(PersonServiceConfig.objects.person.name));
                }

                personModel.startSync()
                    .then(self.onPersonsClick);
            })
            .catch(Util.logError);
    }
});