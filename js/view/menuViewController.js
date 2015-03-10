//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.menuItem.click(function(event){
 		var id = event.target.id;
 		$("#menuView").css("display", "none");
 		$("#detailsView").css("display", "block");
 	});
}