var DetailsViewController = function(view, model) {
 	view.confirmDishButton.click(function(){
 		console.log(parseInt(view.currentDish));
		model.addDishToMenu(parseInt(view.currentDish));
	});
 	view.returnButton.click(function(){
 		$("#detailsView").css("display", "none");
 		$("#menuView").css("display", "block");
	});
}