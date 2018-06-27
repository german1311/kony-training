define({

    //Type your controller code here 

    populateSegment: function(rowData) {
        var dataFormatted = [];
        for (var i = 0; i < rowData.length; i++) {
            const element = rowData[i];
            dataFormatted[i] = {
                imgProfile: "option3.png",
                lblFullName: element.FirstName + " " + element.LastName,
                lblStatus: element.Active ? "" : "Off"
            };
        }

        this.view.segPersons.data = dataFormatted;
    },
    getPersonsFromController: function() {
        var self = this;
        kony.print("getPersonsFromController called");

        personObject.get(null, function(data) {
            kony.print(JSON.stringify(data));
            self.personsData = data;
            self.populateSegment(data);
        }, onFailed);
    }
});