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
	this.dishTitle = container.find("#dishTitle");
	this.dishImage = container.find("#dishImage");
	this.dishDetails = container.find("#dishDetails");
	this.menuTable = container.find("#menu_table");
	this.dishIngredients = container.find("#ingredients_content");
	this.selectedMenu = container.find("#selected_menu");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(model.getTotalMenuPrice());
	this.menuTable.html(model.populateDishTable());
	this.dishTitle.html(model.getDishTitle(1));
	this.dishImage.attr("src", model.getDishImage(1));
	this.dishDetails.html(model.getDishDetails(1));
	this.dishIngredients.html(model.getIngredientsTable(1));
	this.selectedMenu.html(model.getMenu([1, 2, 3]));

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}