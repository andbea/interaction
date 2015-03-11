//ExampleView Object constructor
var PreperationView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.goToMainButton = container.find("#goToMain");
	this.preperationTable = container.find("#preperationTable")
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);

	this.update = function(obj){
		if(obj == "USM") {
			this.numberOfGuests.html(model.getNumberOfGuests());
			this.preperationTable.html(model.populatePreperationView());
		}
	}
}