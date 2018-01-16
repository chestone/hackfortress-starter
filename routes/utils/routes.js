module.exports = {
  allowUnsafe: function(res) {
    return res.header({
      'X-XSS-Protection': 0,
      'Content-Security-Policy': "script-src 'self' 'unsafe-inline'",
    });
  }
}