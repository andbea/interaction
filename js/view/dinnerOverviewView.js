//ExampleView Object constructor
var DinnerOverviewView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishPrice = container.find("#dishPrice");
	this.goToMainButton = container.find("#goToMain");
	this.goToPreperationButton = container.find("#goToPreperation");
	this.fullRecipeButton = container.find("#fullRecipe");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(model.getTotalMenuPrice());

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}