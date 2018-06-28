define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      	enableFullInput:function(){
          this.view.flxContainerInput.width = "100%";
        },
      	disableFullInput:function(){
          this.view.flxContainerInput.width = "60%";          
        }
	};
});