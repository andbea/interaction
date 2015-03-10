//ExampleView Object constructor
var PreperationView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.goToMainButton = container.find("#goToMain");

	this.menuTable = container.find("#menu_table");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menuTable.html(model.populateDishTable());

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}