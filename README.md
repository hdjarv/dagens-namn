# dagens-namn

Npm package for the name of the day according to Swedish calendar.

## Requirements

This module has been tested with [nodejs](https://nodejs.org) version 0.10.33, presumably it should work fine with newer versions of nodejs as well as with [iojs](https://iojs.org).

## Installation

Install this module for use in your projects.

```sh
npm install --save dagens-namn
```

## Usage

This code snippet shows how to use this module.

```javascript
var dagensnamn = require('dagens-namn');

// The today's name(s) with:
console.log(dagensnamn());

// Get the name(s) of a specific date with:
var date = new Date('2015-04-25');
console.log(dagensnamn(date));
```

## Data file

The name data used by this module is stored in the [`data.json`](https://github.com/hdjarv/dagens-namn/blob/master/data.json) file.
It has been derived from the [Swedish Wikipedia page](http://sv.wikipedia.org/wiki/Lista_över_namnsdagar_i_Sverige_i_datumordning) listing the names.

### Format

The data file has the following format:

* An object with a property named "1" to "12" for each month and an object its their value
* Each month value object has a property for each day named "1" to "31" (at most, depending on length of month)
* The value for each day is an array of zero or more strings.

## Tests

If you want to run the unit tests for this package, run this command *after* you have cloned the repository:

```sh
npm test
```

## Credits

dagens-namn npm package was created by Henrik Djärv.

## License

MIT, see file [LICENSE](https://github.com/hdjarv/dagens-namn/blob/master/LICENSE)
