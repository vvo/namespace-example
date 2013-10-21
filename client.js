module.exports = Client;

function Client(name) {
  this.name = name;
}

Client.prototype.connect = function connect() {
  console.log('connect client', this.name);
}