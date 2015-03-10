var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.menuTable = container.find("#menu_table");

	this.menuTable.html(model.populateDishTable());

	this.searchButton = container.find("#searchButton");
	this.searchText = container.find("#searchText");

	this.menuItem = container.find(".menuItem");
	this.filter = container.find(".filter");

	this.update = function(obj){
	}

	model.addObserver(this);

}