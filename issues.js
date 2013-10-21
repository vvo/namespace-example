module.exports = {
  get: function get() {
    console.log('get issues', this.client.name);

  },
  getIssues: function getIssues() {
    this.get();
  }
};
