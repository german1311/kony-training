function AS_TextField_g5adf6941afc4ffd8e78588e8709a1c6(eventobject, changedtext) {
    var self = this;
    self.onDone.call(this);
    if (self.onEndEditing) {
        self.onEndEditing();
    }
}