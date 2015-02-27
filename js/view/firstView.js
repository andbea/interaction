var FirstView = function (container, model) {
	
	this.button = container.find("#goToMain");

	model.addObserver(this);
}