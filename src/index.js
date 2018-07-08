'use strict';

var uniqueRandomArray = require('unique-random-array');
var costelog = require('./costelog.json');

var random = (name = "") => replaceName(name, uniqueRandomArray(costelog)());
var all = (name = "") => costelog.map((item) => replaceName(name, item));

function replaceName(name, item) {
  return item.replace(/#NAME{(.*?)}/, name || '$1').trim();
}

module.exports = {
  random,
  all
};