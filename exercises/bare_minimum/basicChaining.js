/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pluckFirstLineFromFileAsync = require('./promiseConstructor.js');
var getGitHubProfile = require('./promisification.js');
var writeFileASync = Promise.promisify(fs.writeFile);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // console.log('readFilePath:', readFilePath);
  // console.log('writeFilePath:', writeFilePath);

  return pluckFirstLineFromFileAsync.pluckFirstLineFromFileAsync(readFilePath)
  .then(getGitHubProfile.getGitHubProfileAsync)
  .then(function(gitHubProfile) {
    console.log('logged');
    return writeFileASync(writeFilePath, JSON.stringify(gitHubProfile));
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};


// var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
//   // The outermost `return` lets us continue the chain
//   // after an invocation of `addNewUserToDatabaseAsync`
//   return pluckFirstLineFromFileAsync.pluckFirstLineFromFileAsync(readFilePath)
//     .then(getGitHubProfile.getGitHubProfileAsync)
//     .then(function(gitHubProfile) {
//       // write the file???
//     });
// };
