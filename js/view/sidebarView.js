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
	this.dishPrice.html(parseInt(model.getTotalMenuPrice()) * parseInt(model.getNumberOfGuests()));

	model.addObserver(this);

	this.update = function(obj){
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(obj == "USM"){
			this.dishPrice.html(parseInt(model.getTotalMenuPrice()) * parseInt(model.getNumberOfGuests()));
			this.existing = container.find("#selected_menu_Item");
			this.existing.remove();
			this.selectedMenu.html(model.populateSelectedMenu());
		}
	}
}