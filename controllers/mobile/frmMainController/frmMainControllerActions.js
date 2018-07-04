define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onFooterLeftClick defined for mainContainer **/
    AS_UWI_g86466ff690b41e4954c0d9566a82b05: function AS_UWI_g86466ff690b41e4954c0d9566a82b05(eventobject) {
        var self = this;
        return self.onPersonsClick.call(this);
    },
    /** onFooterCenterClick defined for mainContainer **/
    AS_UWI_eba0ec1ddbf54438a43c2a26a692a456: function AS_UWI_eba0ec1ddbf54438a43c2a26a692a456(eventobject) {
        var self = this;
        return self.onSyncClick.call(this);
    },
    /** onFooterRightClick defined for mainContainer **/
    AS_UWI_eaea4ce5f88e476ea39affc8280f9387: function AS_UWI_eaea4ce5f88e476ea39affc8280f9387(eventobject) {
        var self = this;
        return self.onExportClick.call(this);
    },
    /** onRowClick defined for segPersons **/
    AS_Segment_ie7faf40bf664767b1a225e896a2540b: function AS_Segment_ie7faf40bf664767b1a225e896a2540b(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onRowSegmentClick.call(this, eventobject, rowNumber);
    },
    /** onDone defined for search **/
    AS_UWI_d854b8bb9c9e4e18b8b57c5c966e6fb8: function AS_UWI_d854b8bb9c9e4e18b8b57c5c966e6fb8(eventObject, changedText) {
        var self = this;
        return self.onDoneSearchText.call(this, eventObject, changedText);
    },
    /** onClick defined for flxHeaderLeft **/
    AS_FlexContainer_g9b022abbce8406bb466682e18241f26: function AS_FlexContainer_g9b022abbce8406bb466682e18241f26(eventobject) {
        var self = this;
        return self.onDeleteClick.call(this);
    },
    /** onClick defined for flxHeaderRight **/
    AS_FlexContainer_h843fc3a9d6c4eb69f77f6fe87a960df: function AS_FlexContainer_h843fc3a9d6c4eb69f77f6fe87a960df(eventobject) {
        var self = this;
        return self.onAddClick.call(this);
    },
    /** postShow defined for frmMain **/
    AS_Form_adf5b847eef145c18471feed69f74e19: function AS_Form_adf5b847eef145c18471feed69f74e19(eventobject) {
        var self = this;
        return self.onInit.call(this);
    }
});