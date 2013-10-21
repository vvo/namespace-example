var GH = require('./github.js');
var Client = require('./client.js');

var client = new Client('brandon');
var client2 = new Client('antonin');
var client3 = new Client('bibi');
var gh = new GH(client);
var gh2 = new GH(client2);
var gh3 = new GH(client3);

gh.issues.getIssues();
gh2.issues.getIssues();
gh3.pr.get();

console.log(gh.client === gh2.client); // false
console.log(gh.issues === gh2.issues); // false
console.log(gh.client === gh.issues.client) // true
console.log(gh.pr.issues === gh.issues) // true