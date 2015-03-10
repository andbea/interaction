var DetailsViewController = function(view, model) {
 	view.confirmDishButton.click(function(){
		model.addDishToMenu(view.currentDish);
	});
 	view.returnButton.click(function(){
 		$("#detailsView").css("display", "none");
 		$("#menuView").css("display", "block");
	});
}