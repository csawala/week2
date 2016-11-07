'use strict';

const getHTML = require('../httpModules');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  let output = html.join("");
  console.log(output.toLowerCase());
}

getHTML(requestOptions, printLowerCase);