
const { stdin } = require('process');
const {connect} = require('./client.js');
// establishes a connection with the game server



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      console.log("Closing game!");
      process.exit();
    }
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};



console.log("Connecting ...");
connect();
setupInput();