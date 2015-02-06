//ExampleViewController Object constructor
var ExampleViewController = function(view, model) {
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});
 	view.goToMainButton.click(function(){
 		window.location.href = "index.html";
 	});
 	view.confirmDinnerButton.click(function(){
 		window.location.href = "dinnerOverview.html";
 	});
 	view.goToMainButton.click(function(){
 		window.location.href = "index.html";
 	});

 	view.fullRecipeButton.click(function(){
 		window.location.href = "preparation.html";
 	});
}