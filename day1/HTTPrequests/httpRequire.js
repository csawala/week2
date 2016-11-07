'use strict';

const getHTML = require('./httpModules');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
    console.log(html.join('\n========= NEXT CHUNK ========\n'));
}

getHTML(requestOptions, printHTML);