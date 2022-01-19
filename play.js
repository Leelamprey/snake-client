const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.setEncoding('utf8'); // setting encoding into human readable msg
   conn.on('data', (data) => { //get message back from server
     console.log('NEW MESSAGE FROM THE SERVER:', data)
   })
   return conn;
}

console.log("Connecting ...");
connect();