sap.ui.core.mvc.Controller.extend("srs.view.App", {
  
  onSearch : function(oEvent) {
    var view = this.getView();
	var tileContainer = view.byId("idTileContainer");
    var searchString = view.byId("idSearchField").getValue();
    var filter = new sap.ui.model.Filter("Title", sap.ui.model.FilterOperator.Contains, searchString);
	
	tileContainer.getBinding("tiles").filter([filter], sap.ui.model.FilterType.Application);
  }

});
