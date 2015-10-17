#!/usr/bin/env node

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

if(require.main === module) {
  // This file is being run directly, output names for a specified date or today.
  var args = process.argv.slice(2);
  var date = args.length > 0 ? new Date(args[0]) : new Date();
  try {
    console.log(module.exports(date).join(', '));
  }
  catch (error) {
    console.error(error.toString());
  }
}
