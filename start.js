require('babel-register')({
  presets: ['env'],
});

// Import the server.
module.exports = require('./server.js');
