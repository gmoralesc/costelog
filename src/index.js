import uniqueRandomArray from 'unique-random-array';
import costelog from './costelog.json';

var getRandomItem = uniqueRandomArray(costelog);

module.exports = {
  random: getRandomItem,
  all: costelog
};