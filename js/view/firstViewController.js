//ExampleViewController Object constructor
var FirstViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		view.css("display", "none");
 	});
}