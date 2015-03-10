//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.menuTable.click(function(event){
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
 	view.filter.click(function(event){
 		var id = event.target.id;
 		if(id != "nofilter") {
	 		view.menuTable.children().remove()
	 		view.menuTable.html(model.filterDishTable(id, 0));
 		}
 		else {
	 		view.menuTable.children().remove()
			view.menuTable.html(model.populateDishTable());
 		}
 	});
 	view.searchButton.click(function(){
 		var filter = view.searchText.val();
 		console.log(filter);
 		if(filter == "") {
	 		view.menuTable.children().remove()
			view.menuTable.html(model.populateDishTable());
 		}
 		else {
	 		view.menuTable.children().remove()
	 		view.menuTable.html(model.filterDishTable(filter, 1));
 		}
 	});

}