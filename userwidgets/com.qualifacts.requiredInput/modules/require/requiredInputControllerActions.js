define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtInput **/
    AS_TextField_dae3d0619d3c432d89d21814cdbd09d7: function AS_TextField_dae3d0619d3c432d89d21814cdbd09d7(eventobject, changedtext) {
        var self = this;
        self.onDone.call(this);
        if (self.onDone) {
            self.onDone();
        }
    },
    /** onEndEditing defined for txtInput **/
    AS_TextField_g5adf6941afc4ffd8e78588e8709a1c6: function AS_TextField_g5adf6941afc4ffd8e78588e8709a1c6(eventobject, changedtext) {
        var self = this;
        self.onDone.call(this);
        if (self.onEndEditing) {
            self.onEndEditing();
        }
    }
});