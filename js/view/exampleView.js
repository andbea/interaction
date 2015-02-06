//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishPrice = container.find("#dishPrice");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.goToMainButton = container.find("#goToMain");
	this.confirmDishButton = container.find("#confirmDish");
	this.confirmDinnerButton = container.find("#confirmDinner");
	this.fullRecipeButton = container.find("#fullRecipe");

	this.menuTable = container.getElementById("menu_table");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(model.getTotalMenuPrice());
	var texten = model.populateDishTable();
	this.menuTable.innerHTML = "<p>Hej</p>";

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}