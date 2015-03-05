var FirstView = function (container, model) {
	
	this.goToMainButton = container.find("#goToMain");

	model.addObserver(this);

	this.update = function(){
	}
}