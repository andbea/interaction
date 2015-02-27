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

	var preperationView = new PreperationView($("#preperationView"), model);
	var preperationViewController = new PreperationViewController(preperationView, model);

	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, model);
});

