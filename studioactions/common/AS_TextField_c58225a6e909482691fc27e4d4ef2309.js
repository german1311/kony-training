function AS_TextField_c58225a6e909482691fc27e4d4ef2309(eventobject, changedtext) {
    var self = this;
    self.disableFullInput.call(this);
    if (self.onDone) {
        self.onDone(eventobject, changedtext);
    }
}