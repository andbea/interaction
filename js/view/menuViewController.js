//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.menuItem.click(function(){
 		alert("Hej");
 		var id = menuItem.children(".thumbnail").attr("id");
 		alert(id);
 	});
}