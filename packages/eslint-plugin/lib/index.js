/**
 * @fileoverview Shareable ESLint configurations &amp; rules used in Brion Mario's code bases.
 * @author Brion Mario
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');

// import processors
module.exports.processors = {
  // add your processors here
};

// module.exports.configs = requireIndex(__dirname + "/configs");
module.exports.configs = {
  core: require('./configs/core'),
  internal: require('./configs/internal'),
  javascript: require('./configs/javascript'),
  jest: require('./configs/jest'),
  next: require('./configs/next'),
  prettier: require('./configs/prettier'),
  react: require('./configs/react'),
  strict: require('./configs/strict'),
  typescript: require('./configs/typescript'),
};
