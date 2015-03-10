//DinnerModel Object constructor
var DinnerModel = function() {

	var numberOfGuests = 0;

	// This menu variable is filled all the ids of the dishes selected from the menu.
	var menu = [];
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var obs_list = [];

	this.addObserver = function(observer) {
		obs_list.push(observer);
	}
	this.removeObserver = function() {
		obs_list.splice(0, 1);	
	}

	this.notifyObservers = function(obj) {
		var i;
		for	(i = 0; i < obs_list.length; i++) {	
			obs_list[i].update(obj);
		}
	}

	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		numberOfGuests = num;
		this.notifyObservers("");
		return numberOfGuests;
	}


	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  	for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 2
		var i, response = -1;
		for(i = 0; i < menu.length; i++) {
			if(dishes[menu[i]]["type"] == type) {
				response = menu[i];
			}
		}
		return response;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
		var i;
		var list = [];
		for(i = 0; i < menu.length; i++) {
			if(dishes[menu[i]]["type"] == type) {
				list.push(menu[i]);
			}
		}
		return list;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var i, price = 0;
		for(i = 0; i < menu.length; i++) {
			price = price + getDishPrice(menu[i]);
		}
		return price;
	}

	this.populateDishTable = function() {
		var html = '';
		var i;
		var numberOfRows = Math.round(dishes.length/4);
		for(i = 0; i < numberOfRows; i++) {
			html = html + '<div class="row">' 
						+ 	this.populateDishRow(i) 
						+ '</div>';
		}
		return html;

	}

	this.itemSelect = function(id){
		alert(id);
	}

	this.populateDishRow = function(row_number) {
		var html = '';
		var i;
		var start = 0 + (row_number*4);
		var end = (row_number+1)*4;
		if(end > dishes.length) {
			end = dishes.length-1;
		}
		for(i = start; i < end; i++) {
			var text = this.smallDesc(dishes[i]["description"]);
			html = html + '<div id="menu_item_' + dishes[i].id + '" ' + 'class="col-sm-3" style="cursor: pointer;">'
						+	'<div id="menu_block" class="thumbnail">'
						+ 		'<img id="menu_image" src="images/' + dishes[i]["image"] + '" alt="...">'
						+ 		'<div class="caption">' 
						+ 			'<h3>' +  dishes[i]["name"] + '</h3>'
						+ 			'<p>' + text + '</p>'
						+ 		'</div>'
						+	'</div>'
						+ '</div>';
			this.notifyObservers("menu_item_" + dishes[i].id);
		}
		return html;
	}
	this.getIngredientsTable = function(id) {
		var html = '';
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		var ingredients = dish["ingredients"];
		var cost = 0;
		for(var i = 0; i < ingredients.length; i++) {
			html = html + '<tr>'
						+	'<td id="quantity">' + ingredients[i]["quantity"] +'</td>' 
						+	'<td id="unit">' + ingredients[i]["unit"] +'</td>' 
						+	'<td id="name">' + ingredients[i]["name"] +'</td>' 
						+	'<td id="name">' + 'SEK' +'</td>' 
						+	'<td id="price">' + ingredients[i]["price"] +'</td>' 
						+ '</tr>';
			cost = cost + ingredients[i]["price"];
		}
		$("#cost").html(cost.toString() + " SEK");
		return html;
	}


	this.getMenu = function(id_list) {
		var html = '';
		var dish;
		var id;
		for(var a = 0; a < id_list.length; a++) {
			id = id_list[a];
			for(key in dishes){
				if(dishes[key].id == id) {
					dish = dishes[key];
				}
			}
			var text = this.smallDesc(dish["description"]);
			html = html + '<div class="col-sm-3">'
						+	'<div id="menu_block" class="thumbnail">' 
						+ 		'<img id="menu_image" src="images/' + dish["image"] + '" alt="...">'
						+ 		'<div class="caption">' 
						+ 			'<h3>' +  dish["name"] + '</h3>'
						+ 			'<p>' + text + '</p>'
						+ 		'</div>'
						+	'</div>'
						+ '</div>';
		}
		return html;
	}

	this.getMenuPreperation = function(id_list) {
		var html = '';
		var dish;
		var id;
		for(var a = 0; a < id_list.length; a++) {
			id = id_list[a];
			for(key in dishes){
				if(dishes[key].id == id) {
					dish = dishes[key];
				}
			}
			var text = this.smallDesc(dish["description"]);
			html = html + '<div class="row">'
						+	'<div class="col-sm-3">' 
						+		'<div class="thumbnail">'
					    + 			'<img id="dishImage" src="images/' + dish["image"] + '" alt="..." style="width:100px;height:100px">'
					    +		'</div>' 
					    +	'</div>'
					    +	'<div class="col-sm-3">'
					    + 		'<h2>' + dish["name"] + '</h2>'
					    +	'</div>'
						+ 	'<div class="col-sm-6">'
					  	+		'<p><b>Preparation</b></p>'
					  	+		'<p>' + dish["description"] + '</p>'
					  	+	'</div>'
						+ '</div>';
		}
		return html;
	}

	this.smallDesc = function(text) {
		if(text.length >= 50) {
			text = text.substring(0, 51) + '...';
		}
		return text;
	}

	this.getDishTitle = function(id) {
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		return dish["name"];
	}

	this.getDishImage = function(id) {
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		return 'images/' + dish["image"];
	}

	this.getDishDetails = function(id) {
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		return dish["description"];
	}

	this.populateDishDetails = function() {

	}
	this.populateMenuPreperation = function() {

	}
	this.populateOverview = function() {

	}

	this.getDishPrice = function(id) {
		var i, price = 0;
		var dish = getDish(id);
		var ingredients = dish["ingredients"];
		for(i = 0; i < ingredients.length; i++) {
			price = price + ingredients[i]["price"];
		}
		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		var dish = getDish(id);
		var type = dish["type"];
		var response = getSelectedDish(type);
		if(response != -1) {
			removeDishFromMenu(response);
		}
		menu.push(id);
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
		var i, response = -1;
		for(i = 0; i < menu.length; i++) {
			if(menu[i] == id) {
				menu.splice(i, 1);
				response = 1;
			}
		}
		return response;
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients, function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1) {
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}



	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}