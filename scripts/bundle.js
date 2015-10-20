(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

addItems.addEventListener("click", function (e) {
	e.preventDefault();
	var anItemName = itemName.value;
	console.log(priceOne);
	if (!parseInt(priceOne.value)) {
		error.innerHTML = "Please enter a valid price";
	} else {

		var price = parseFloat(priceOne.value);
		var quantity = parseInt(quantityOne.value);
		var subtotal = price * quantity;
		var totalTax = subtotal * 0.055;
		totalPrice += subtotal + totalTax;
		var newItem = document.createElement("li");
		newItem.innerHTML = anItemName + " - subtotal: " + subtotal + " - tax: " + totalTax;
		items.appendChild(newItem);
		total.innerHTML = "Your total is " + Math.round(totalPrice * 100) / 100;
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
