define({

    //Type your controller code here 
    onNavigate: function(context) {
        if (!context) {
            return;
        }

        personModel.findPersonById(context.primaryKey).then((data) => {
            if (data.length === 0) {
                kony.print(JSON.stringify(context));
                alert("something went wrong, no person found with id: " + context.primaryKey);
                return;
            }

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
            FirstName: this.view.txtFirstName.text,
            LastName: this.view.txtLastName.text,
            Address: this.view.txtAddress.text,
            PhoneNumber: this.view.txtPhoneNumber.text,
            Email: this.view.txtEmail.text,
            Active: this.view.swcActive.selectedIndex === 0 ? true : false
        };

        personModel.save(model).then((data) => {
            alert("saved!");
        }).catch(Util.logError);
    },
    onCancel: function() {
        var editForm = new kony.mvc.Navigation("frmMain");
        editForm.navigate(null);
    }
});