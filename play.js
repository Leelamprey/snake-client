
const { stdin } = require('process');
const {connect} = require('./client.js');
const {setupInput} = require('./input.js');
// establishes a connection with the game server

console.log("Connecting ...");
let connection = connect();
setupInput(connection);