//ExampleView Object constructor
var SidebarView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishPrice = container.find("#dishPrice");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinnerButton = container.find("#confirmDinner");
	this.selectedMenu = container.find("#sidebar_content");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishPrice.html(model.getTotalMenuPrice() * model.getNumberOfGuests());

	model.addObserver(this);

	this.update = function(obj){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.dishPrice.html(model.getTotalMenuPrice() * model.getNumberOfGuests());
		console.log("getting menu");
		this.selectedMenu.html(model.populateSelectedMenu());
	}
}