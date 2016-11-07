'use strict';

const https = require('https');

function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html.join('\n========= NEXT CHUNK ========\n'));
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);