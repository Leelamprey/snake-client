const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', (data) => {
    console.log('Successfuly connected to game server!');
    conn.write("Name: Lee");
  });
  conn.setEncoding('utf8'); // setting encoding into human readable msg
   conn.on('data', (data) => { //get message back from server
     console.log('NEW MESSAGE FROM THE SERVER:', data)
   })
   return conn;
}

module.exports = {connect};