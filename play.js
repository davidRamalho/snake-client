const { connect } = require('./client');
const { generateKeyPair } = require('crypto');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleInputUser = (key) => {   
    if (key === '\u0003') {
      process.exit();
    }
    
  })
  
  return stdin;
}
setupInput();

