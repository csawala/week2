'use strict';

const getHTML = require('../httpModules');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  let output = html.join("");
  console.log(output.toUpperCase());
}

getHTML(requestOptions, printUpperCase);