module.exports = Issues;

function Issues(client) {
  this.client = client;
}

Issues.prototype.get = function get() {
  console.log('get issues', this.client.name);
}

Issues.prototype.getIssues = function getIssues() {
  this.get();
}