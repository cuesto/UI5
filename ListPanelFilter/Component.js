jQuery.sap.declare("srs.Component");

sap.ui.core.UIComponent.extend("srs.Component", {

  metadata : {
    rootView : "srs.view.App"		
  },

  init : function() {
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
  }
  
});


