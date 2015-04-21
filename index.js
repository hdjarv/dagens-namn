'use strict';

var data = require('./data.json');

module.exports = function (date) {
  date = (date instanceof Date) ? date : new Date();

  var monthNo = date.getMonth() + 1,
      dayNo = date.getDate();

  return data[monthNo][dayNo];
};
