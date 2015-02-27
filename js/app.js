$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var firstView = new FirstView($("#firstView"), model);
	var firstViewController = new FirstViewController(firstView, model);

	var detailsView = new DetailsView($("#detailsView"), model);
	var detailsViewController = new DetailsViewController(detailsView, model);
 
	var menuView = new MenuView($("#menuView"), model);
	var menuViewController = new MenuViewController(menuView, model);

	var overviewView = new overviewView($("#overviewView"), model);
	var overviewViewController = new overviewViewController(menuView, model);
});

