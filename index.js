var request = require('request');
// var token = require('./token');




var GITHUB_USER = "DeeKeilholz";
var GITHUB_TOKEN = "30300c552481a5a440ab1bd09a308617d45741e9";


function getRepoContributors(repoOwner, repoName, callback) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);

var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};
// my get request
request.get(options, callback)

}




// calling my function getRepoContributors
getRepoContributors("jquery", "jquery", function (err, result) {
  console.log("Errors:", err);
   console.log("Result:", result);
 });
