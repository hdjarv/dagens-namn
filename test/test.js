'use strict';

var assert = require('chai').assert;

// the module to test
var dagensnamn = require('../index.js');

// the data used by the module
var data = require('../data.json');

it('should export a function', function () {
  assert.isFunction(dagensnamn);
});

it('should get today\'s name when called without argument', function () {
  var today = new Date();
  assert.deepEqual(dagensnamn(), data[today.getMonth() + 1][today.getDate()]);
});

it('should get today\'s name when called with a non-date argument', function () {
  var today = new Date();
  assert.deepEqual(dagensnamn('not a date'), data[today.getMonth() + 1][today.getDate()]);
});

// Test all possible dates (including the leap day, hence 2012 for year)
Object.keys(data).forEach(function(month) {
  Object.keys(data[month]).forEach(function(day) {
    var expectedResult = data[month][day];
    it('should return [' + expectedResult.join(', ') + '] for ' + month + '-' + day,function() {
      assert.deepEqual(dagensnamn(new Date('2012-' + month + '-' + day)), expectedResult);
    });
  });
});
