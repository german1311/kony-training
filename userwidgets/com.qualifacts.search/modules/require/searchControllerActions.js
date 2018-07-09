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
    /** onClick defined for flxContainerInput **/
    AS_FlexContainer_b98766bb2682409db1b21af31bd88f69: function AS_FlexContainer_b98766bb2682409db1b21af31bd88f69(eventobject) {
        var self = this;
        console.log("calling from flxContainerInput");
        this.enableFullInput();
    },
    /** onClick defined for flxContainerControls **/
    AS_FlexContainer_b664d6657c62489199e0f48c0c271787: function AS_FlexContainer_b664d6657c62489199e0f48c0c271787(eventobject) {
        var self = this;
        console.log("calling from flxContainerControls");
        this.enableFullInput();
    },
    /** onClick defined for flxContainerBox **/
    AS_FlexContainer_b1da8ade9d8e4a01a2e61df864691106: function AS_FlexContainer_b1da8ade9d8e4a01a2e61df864691106(eventobject) {
        var self = this;
        console.log("calling from flxContainerBox");
        this.enableFullInput();
    }
});