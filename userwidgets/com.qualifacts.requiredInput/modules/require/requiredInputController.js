define(function() {
  	var skin = {
      error: "ErrorField",
      normal: "EditNormalField"
    };
  	
  

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
        onDone: function() {          
          var config = {
            validateOnLeave : this.validateOnLeave,
            isRequired: this.isRequired
          };

          if(!config.validateOnLeave){
            return;
          }
          
          if(config.isRequired && !this.view.txtInput.text){
            this.view.txtInput.skin = skin.error;
            return;
          }
          
          this.view.txtInput.skin = skin.normal;
        },      
        
	};
});