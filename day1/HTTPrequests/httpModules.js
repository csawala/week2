'use strict';

const https = require('https');


module.exports = function getHTML (options, callback) {
  let dataBuffer = [];

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      dataBuffer.push(data);
    });

    response.on('end', function(){
      console.log('Response stream complete.', '\n');
      callback(dataBuffer);
    });
  });

};