//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(3);

	this.plusButton.click( function() {
		alert("Hello");
		this.numberOfGuests.html(model.setNumberOfGuests(1));
	});

	this.minusButton.click( function() {
		this.numberOfGuests.html(model.setNumberOfGuests(-1));
	});

}
 
