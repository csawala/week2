'use strict';

const getHTML = require('../httpModules');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  let output = html.join("").split("").reverse().join("");

  console.log(output);
}

getHTML(requestOptions, printReverse);