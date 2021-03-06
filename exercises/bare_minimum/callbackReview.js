/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, cb) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) { cb(err); }
    var firstLine = data.toString().split('\n')[0];
    cb(null, firstLine);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  request.get(url, function(err, res) {
    if (err) { return cb(err); }
    cb(null, res.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
