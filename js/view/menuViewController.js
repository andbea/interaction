//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.menuItem.click(function(event){
 		var id = event.target.id;
 		id = id.substring(10, id.length);
		model.getIngredientsTable(id);
		model.getDishPrice(id);
		model.getDishDetails(id);
		model.getDishImage(id);
		model.getDishTitle(id);
		model.getDishID(id);
 		$("#menuView").css("display", "none");
 		$("#detailsView").css("display", "block");
 	});
}