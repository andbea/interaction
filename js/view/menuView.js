var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.menuTable = container.find("#menu_table");
	
	this.menuTable.html(model.populateDishTable());

	model.addObserver(this);
	this.update = function(){
	}
}