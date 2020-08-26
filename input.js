let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    
  stdin.on('data', handleInputUser = (key) => {   
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w'){
      conn.write('Move: up');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 'd') {
      conn.write('Move: right');
    }
    
  })
  
  return stdin;
}

module.exports = {setupInput};