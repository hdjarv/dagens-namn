'use strict';

var data = require('./data.json');

module.exports = function (date) {
  date = (date instanceof Date) ? date : new Date();

  var monthNo = date.getMonth() + 1,
      dayNo = date.getDate();

  if(isNaN(monthNo) || isNaN(dayNo)) {
    throw new Error('Invalid date');
  }

  return data[monthNo][dayNo];
};
