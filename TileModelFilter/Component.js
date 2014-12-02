jQuery.sap.declare("srs.Component");

sap.ui.core.UIComponent.extend("srs.Component", {

  metadata : {
    rootView : "srs.view.App"		
  },

  init : function() {
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

    // Model: JSON
	var oModel = new sap.ui.model.json.JSONModel();	
	
    oModel.loadData('model/data.json');		
    this.setModel(oModel); 
  }
  
});


