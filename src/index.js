'use strict';

var uniqueRandomArray = require('unique-random-array');
var costelog =  require('./costelog.json');

var getRandomItem = uniqueRandomArray(costelog);

module.exports = {
  random: getRandomItem,
  all: costelog
};