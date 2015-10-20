'use strict';
var itemName = document.getElementById('itemName');
var priceOne = document.getElementById('priceOne');
var quantityOne = document.getElementById('quantityOne');
var getTotal = document.getElementById('getTotal');
var error = document.getElementById('error');
var items = document.getElementById('items');
var total = document.getElementById('total');
var addItems = document.getElementById('button');
var totalPrice = 0;

// var itemlist = [];


addItems.addEventListener("click", function(e) {
	e.preventDefault();
	var anItemName = itemName.value;
	console.log(priceOne);
	if(!parseInt(priceOne.value)) {
		error.innerHTML = "Please enter a valid price";
	} else {
		
		var price = parseFloat(priceOne.value);
		var quantity = parseInt(quantityOne.value);
		var subtotal = (price*quantity);
		var totalTax = subtotal*0.055;
		totalPrice += subtotal + totalTax;
		var newItem = document.createElement("li");
		newItem.innerHTML = anItemName + " - subtotal: " + subtotal + " - tax: " + totalTax
		items.appendChild(newItem);
		total.innerHTML = "Your total is " + Math.round(totalPrice * 100) /100;
	}
})