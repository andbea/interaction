//ExampleViewController Object constructor
var PreperationViewController = function(view, model) {
 	view.goToMainButton.click(function(){
 		$("#preperationView").css("display", "block");
 		$("#sidebarView").css("display", "block");
 		$("#menuView").css("display", "block");
 		$("#banner").css("display", "block");
 		$("#detailsView").css("display", "block");
 		$("#dinnerOverviewView").css("display", "none");
 	});
}