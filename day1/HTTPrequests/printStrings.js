var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var dataBuffer = [];

  https.get(requestOptions, function(response){
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

getAndPrintHTML();