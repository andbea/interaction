//ExampleViewController Object constructor
var PreperationViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		$("#preperationView").css("display", "none");
 		$("#sidebarView").css("display", "block");
 		$("#menuView").css("display", "block");
 	});
}