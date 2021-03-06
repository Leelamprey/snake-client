let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      console.log("Closing game!");
      process.exit();
    } else if(key === 'w') {
      connection.write("Move: up");
    } else if(key === 'a') {
      connection.write("Move: left");
    } else if(key === 's') {
      connection.write("Move: down");
    } else if(key === 'd') {
      connection.write("Move: right");
    } else if(key === 'l') {
      connection.write("Say: You'll never take me alive!");
    } else if(key === 'k') {
      connection.write("Say: Catch me if you can");
    } else if(key === 'j') {
      connection.write("Say: Snek Blep");
    }
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};