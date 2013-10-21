var Issues = require('./issues.js');

module.exports = GH;

function GH(client) {
  this.client = client;

  this.issues = new Issues(client);
}

GH.prototype.func = function func() {

}