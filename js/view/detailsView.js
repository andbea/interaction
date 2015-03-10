//ExampleView Object constructor
var DetailsView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.currentDish = 0;
	this.dishPrice = container.find("#dishPrice");
	this.dishTitle = container.find("#dishTitle");
	this.returnButton = container.find("#return");
	this.getIngredients = container.find("#ingredients_content");
	this.confirmDishButton = container.find("#confirmDish");
	this.dishDetails = container.find("#dishDetails");
	this.dishImage = container.find("#dishImage");

	model.addObserver(this);

	this.update = function(obj){
		if(obj.substring(0, 3) == "GI1"){
			this.getIngredients.html(obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "DP1"){
			this.dishPrice.html(obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "DD1"){
			this.dishDetails.html(obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "DI1"){
			this.dishImage.attr("src", obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "DT1"){
			this.dishTitle.html(obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "ID1"){
			this.currentDish = parseInt(obj.substring(3, obj.length));
		}

	}
}