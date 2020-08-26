const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log ('Successfully connected to game server'); 
    conn.write('Name: DMR');
    // conn.write('Move: up');
  })
  
  conn.on('data', () => {
    console.log('You have been BURNINATED for idling');
  })

  return conn;
}

module.exports = {connect};