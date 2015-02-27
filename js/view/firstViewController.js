//ExampleViewController Object constructor
var FirstViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		$("#firstView").css("display", "none");
 		$("#sidebarView").css("display", "inline");
 		$("#banner").css("display", "inline");
 		$("#menuView").css("display", "inline");
 	});
}