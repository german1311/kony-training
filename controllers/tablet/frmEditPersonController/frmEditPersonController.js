define({

    //Type your controller code here 
    onNavigate: function(context) {
        if (!context) {
            this.cleanFields();
            return;
        }

        personModel.findPersonById(context.primaryKey).then((data) => {
            if (data.length === 0) {
                kony.print(JSON.stringify(context));
                alert("something went wrong, no person found with id: " + context.primaryKey);
                return;
            }

            this.Id = context.primaryKey;
            var person = data[0];
            this.view.txtFirstName.text = person.FirstName;
            this.view.txtLastName.text = person.LastName;
            this.view.txtAddress.text = person.Address;
            this.view.txtPhoneNumber.text = person.PhoneNumber;
            this.view.txtEmail.text = person.Email;
            this.view.swcActive.selectedIndex = person.Active == 1 ? 0 : 1;
        }).catch(Util.logError);
    },
    onSave: function() {
        let model = {
            Id: this.Id,
            FirstName: this.view.txtFirstName.text,
            LastName: this.view.txtLastName.text,
            Address: this.view.txtAddress.text,
            PhoneNumber: this.view.txtPhoneNumber.text,
            Email: this.view.txtEmail.text,
            Active: this.view.swcActive.selectedIndex === 0 ? true : false
        };

        personModel.save(model).then((data) => {
            let basicProperties = {
                message: "Persona guardada!",
                alertType: constants.ALERT_TYPE_INFO,
                alertHandler: () => {
                    this.onCancel();
                }
            };

            let platformSpecificProperties = {};
            kony.ui.Alert(basicProperties, platformSpecificProperties);
        }).catch(Util.logError);
    },
    onCancel: function() {
        var editForm = new kony.mvc.Navigation("frmMain");
        editForm.navigate(null);
    },
    cleanFields() {
        this.Id = null;
        this.view.txtFirstName.text = null;
        this.view.txtLastName.text = null;
        this.view.txtAddress.text = null;
        this.view.txtPhoneNumber.text = null;
        this.view.txtEmail.text = null;
        this.view.swcActive.selectedIndex = 0;
    }
});