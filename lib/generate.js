'use strict';
var dictionary = require('./dictionary');
var _ = require('lodash');

function generate () {
	var food = _.capitalize(_.sample(dictionary.food));
	var ingredient = _.capitalize(_.sample(dictionary.ingredient));
	var description = _.capitalize(_.sample(dictionary.description));
	var truckType = _.capitalize(_.sample(dictionary.truckType));
	
	var output = ' ';
	var randomNumber = _.random(1, 4);
	
	if (randomNumber === 1 ) {
		output = 'The ' + food + ' ' + truckType;
		} else if (randomNumber === 2 ) {
			output = description + ' ' + food + ' ' + truckType;
			} else if (randomNumber) {
				output = 'The ' + description + ' ' + food;
				} else {
					output = 'The ' + description + ' ' + food + ' ' + truckType;
					}
	
	return output;
	}
	console.log(generate());
	
module.exports = generate;
