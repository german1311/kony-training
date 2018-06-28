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
        kony.print("getPersons called");
        getPersons().then(function(data) {
            kony.print(JSON.stringify(data));           
            self.populateSegment(data);
            self.view.mainContainer.setActiveFooterMenu(1);
        }, onFailed);
    },
    onSyncClick: function() {
        this.view.mainContainer.setActiveFooterMenu(2);
    },
    onExportClick: function() {
        this.view.mainContainer.setActiveFooterMenu(3);
    },
    onDoneSearchText: function(e, ar) {
        if (!e.text) {
            this.populateSegment(personsData);
            this.view.search.disableFullInput();
            return;
        }

        var personsFound = findPerson(e.text);
        this.populateSegment(personsFound);
    },
    onRowSegmentClick: function(eventObject, rowNumber) {
        var editForm = new kony.mvc.Navigation("frmEditPerson");

        editForm.navigate(eventObject.selectedRowItems[0]);
    }
});