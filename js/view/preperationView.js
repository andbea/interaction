//ExampleView Object constructor
var PreperationView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.goToMainButton = container.find("#goToMain");
	this.getIngredients = container.find("#ingredients_content");
	this.menuTable = container.find("#menu_table");
	this.menuPreperation = container.find("#preperationView")
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.menuTable.html(model.populateDishTable());
	this.menuPreperation.html(model.getMenuPreperation());

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
		
	}
}