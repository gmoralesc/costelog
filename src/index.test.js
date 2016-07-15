import {expect} from 'chai';
import costelog from './index';

describe('costelog', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(costelog.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });
  });

  describe('random', function() {
    it('should return a random item from the costelog.all', function() {
      var randomItem = costelog.random();
      expect(costelog.all).to.include(randomItem);
    });
  });
});
