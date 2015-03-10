var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.menuTable = container.find("#menu_table");
	this.menuItem = [];

	this.update = function(obj){
		if(obj.substring(0, 10) == "menu_item_"){
			this.menuItem.push(container.find("#" + obj));
		}
		alert(this.menuItem[0].attr("id"));
	}

	model.addObserver(this);

	this.menuTable.html(model.populateDishTable());

}