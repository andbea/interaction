//ExampleViewController Object constructor
var FirstViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		$("#firstView").css("display", "none");
 		$("#sidebarView").css("display", "block");
 		$("#banner").css("display", "block");
 		$("#menuView").css("display", "block");
 	});
}