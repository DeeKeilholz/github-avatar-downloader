var request = require('request');
// var config = require('./config');
var fs = require("fs");



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
getRepoContributors("jquery", "jquery", function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var data = JSON.parse(body)
      console.log(data);
    } else {
      // didn't get an http response
      console.log(error);
      // got an https response, but not status == 200
      console.log(response);
    }
  })

  request.get('https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg')
         // .on('error') handles any errors
         .on('error', function (err) {                                   // Note 2
           throw err;
         })
         .pipe(fs.createWriteStream('./kvirani.jpg'));
  //function that will make a request to a given url, saving the resulting
  // image file to a specified filePath.

  // function downloadImageByURL(url, filePath) {
  //   // ...
  // }
