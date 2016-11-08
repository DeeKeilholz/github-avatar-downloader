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

var urlList = []

// calling my function getRepoContributors

getRepoContributors(process.argv[2], process.argv[3], function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body)
      data.forEach (function (elm, index, array) {
        urlList.push(elm["avatar_url"])
      })
  }
  downloadImageByURL(urlList);

})



  // function that will make a request to a given url, saving the resulting
  // image file to a specified filePath.

  function downloadImageByURL(urlList) {
    fs.mkdirSync('avatars')
    urlList.forEach (function (elm, index, array) {
      request.get(elm).pipe(fs.createWriteStream(`avatars/${index}.jpg`));
    })
    if (process.argv.length !== 4) {

      let badArgs = "Please provide the name of the repo owner and the name of the rep e.g. \"jquery\" \"jquery\"";
      throw badArgs;
  }
}
