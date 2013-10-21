var merge = require('lodash.merge');
var issues = require('./issues.js');

module.exports = GH;

function GH(client) {
  this.client = client;

  this.issues = Object.create(this);
  this.pr = Object.create(this);
  this.setup();
}

GH.prototype.setup = function setup() {
  this.issues = merge(this.issues, require('./issues.js'));
  this.pr = merge(this.pr, require('./pr.js'));
}