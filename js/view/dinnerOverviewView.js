//ExampleView Object constructor
var DinnerOverviewView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.goToMainButton = container.find("#goToMain");
	this.goToPreperationButton = container.find("goToPreperation");


	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishPrice = container.find("#dishPrice");

	this.dinnerTable = container.find("#dinnerOverviewTable");

	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(parseInt(model.getTotalMenuPrice()) * parseInt(model.getNumberOfGuests()));

	model.addObserver(this);

	this.update = function(obj){
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(obj == "USM") {
			this.dishPrice.html(parseInt(model.getTotalMenuPrice()) * parseInt(model.getNumberOfGuests()));
			this.dinnerTable.html(model.populateDinnerOverview());
		}
	}
}