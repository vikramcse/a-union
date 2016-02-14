'use strict';
var unique = require('unique-array');

module.exports = function () {
  var nonUniqueArray = Array.prototype.concat.apply([], arguments);
  return unique(nonUniqueArray);
};
