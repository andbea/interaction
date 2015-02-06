//ExampleViewController Object constructor
var ExampleViewController = function(view, model) {
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	view.createButton.click(function(){
 		window.location.href = "index.html";
 	});
 	view.goBackButton.click(function(){
 		window.location.href = "index.html";
 	});
 	view.confirmDinnerButton.click(function(){
 		window.location.href = "dinnerOverview.html";
 	});
 	view.confirmDishButton.click(function(){
 		window.location.href = "index.html";
 	});

 	view.fullRecipeButton.click(function(){
 		window.location.href = "preparation.html";
 	});
}