const { connect } = require('./client');
const { generateKeyPair } = require('crypto');
const { setupInput } = require('./input')

console.log('Connecting ...');
connect();

setupInput();

