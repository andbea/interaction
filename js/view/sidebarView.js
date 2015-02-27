//ExampleView Object constructor
var SidebarView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishPrice = container.find("#dishPrice");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinnerButton = container.find("#confirmDinner");
	this.dishTitle = container.find("#dishTitle");
	this.selectedMenu = container.find("#selected_menu");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(model.getTotalMenuPrice());
	this.dishTitle.html(model.getDishTitle(1));

	model.addObserver(this);

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}