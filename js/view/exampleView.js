//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.createButton = container.find("#create");
	this.goBackButton = container.find("#goBack");
	this.confirmDishButton = container.find("#confirmDish");
	this.confirmDinnerButton = container.find("#confirmDinner");
	this.fullRecipeButton = container.find("#fullRecipe");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}