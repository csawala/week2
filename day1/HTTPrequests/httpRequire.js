'use strict';

// import { getHTML, printHTML } from "./httpModules";
const _mods = require('./httpModules');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


_mods.getHTML(requestOptions, _mods.printHTML);