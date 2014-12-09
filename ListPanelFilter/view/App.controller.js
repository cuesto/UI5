sap.ui.core.mvc.Controller.extend("srs.view.App", {
  
  onInit: function(oEvent) {
    var view = this.getView();
	var model = new sap.ui.model.json.JSONModel();
	
    model.loadData("model/data.json");		
    view.setModel(model);	
  },
  
  onSearch : function(oEvent) {  
    var view = this.getView();  
    var list = view.byId("idList");  
    var searchString = view.byId("idSearchField").getValue();  
    var filter = new sap.ui.model.Filter("Header", sap.ui.model.FilterOperator.Contains, searchString);  
    list.getBinding("items").filter([filter], sap.ui.model.FilterType.Application);  
  }  

});
