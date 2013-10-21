var GH = require('./github.js');
var Client = require('./client.js');

var client = new Client('brandon');
var client2 = new Client('antonin');
var gh = new GH(client);
var gh2 = new GH(client2);

gh.issues.getIssues();
gh2.issues.getIssues();

console.log(gh.client === gh2.client);
console.log(gh.issues === gh2.issues);
