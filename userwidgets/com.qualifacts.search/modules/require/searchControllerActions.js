define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtInput **/
    AS_TextField_c58225a6e909482691fc27e4d4ef2309: function AS_TextField_c58225a6e909482691fc27e4d4ef2309(eventobject, changedtext) {
        var self = this;
        self.disableFullInput.call(this);
        if (self.onDone) {
            self.onDone(eventobject, changedtext);
        }
    },
    /** onTouchStart defined for txtInput **/
    AS_TextField_hf43c873a2b848ebb4957c776870fd33: function AS_TextField_hf43c873a2b848ebb4957c776870fd33(eventobject, x, y) {
        var self = this;
        return self.enableFullInput.call(this);
    },
    /** onEndEditing defined for txtInput **/
    AS_TextField_de6b98b1bd6f4b66afcfea5d5bd0dc9f: function AS_TextField_de6b98b1bd6f4b66afcfea5d5bd0dc9f(eventobject, changedtext) {
        var self = this;
        if (self.onDone) {
            self.onDone(eventobject, changedtext);
        }
    },
    /** onClick defined for flxContainerInput **/
    AS_FlexContainer_b98766bb2682409db1b21af31bd88f69: function AS_FlexContainer_b98766bb2682409db1b21af31bd88f69(eventobject) {
        var self = this;
        return self.enableFullInput.call(this);
    },
    /** onClick defined for flxContainerControls **/
    AS_FlexContainer_b664d6657c62489199e0f48c0c271787: function AS_FlexContainer_b664d6657c62489199e0f48c0c271787(eventobject) {
        var self = this;
        self.enableFullInput.call(this);
        self.view.flxContainerInput.width = "100%";
    }
});