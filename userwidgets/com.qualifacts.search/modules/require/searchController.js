define(function() {

    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {

        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {

        },
        enableFullInput: function() {
            this.view.flxContainerInput.width = "100%";
            this.view.txtInput.type = "string";
            this.view.txtInput.width = "95%";
            this.view.txtInput.setFocus(true);
        },
        disableFullInput: function() {
            this.view.flxContainerInput.width = "35%";
            this.view.txtInput.type = "ref";
            this.view.txtInput.width = "preferred";
            this.view.txtInput.setFocus(false);
        }
    };
});