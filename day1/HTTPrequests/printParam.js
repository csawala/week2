'use strict';

const https = require('https');

function getAndPrintHTML (options) {

  let dataBuffer = [];

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      dataBuffer.push(data);
    });

    response.on('end', function(){
      console.log('Response stream complete.', '\n');
      console.log(dataBuffer.join('\n =========== next chunk =========\n'));
    });
  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);