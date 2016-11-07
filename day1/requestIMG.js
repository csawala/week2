'use strict';

const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log("Status: ", response.statusMessage);
    console.log("Downloading", response.headers['content-type'], "...");
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function(){
    console.log("Download complete.");
  });
