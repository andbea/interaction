//ExampleViewController Object constructor
var SidebarViewController = function(view, model) {
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	view.confirmDinnerButton.click(function(){
 		window.location.href = "dinnerOverview.html";
 	});
}