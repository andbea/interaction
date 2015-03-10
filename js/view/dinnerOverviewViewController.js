//ExampleViewController Object constructor
var DinnerOverviewViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		$("#dinnerOverviewView").css("display", "none");
 		$("#sidebarView").css("display", "block");
 		$("#menuView").css("display", "block");
 	});

 	view.goToPreperationButton.click(function(){
 		$("#dinnerOverviewView").css("display", "none");
 		$("#preperationView").css("display", "block");
 	});
}