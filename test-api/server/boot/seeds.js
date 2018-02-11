'use strict';

var PersonSeeder = require('../seeds/person');

module.exports = function(app) {
  PersonSeeder(app);
};
