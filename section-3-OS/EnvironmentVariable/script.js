let environmentVariale = process.env;
console.log(environmentVariale);

const {exec} = require('child_process')

exec(`powershell -Command "setx VAR_NAME 'Node JS'"`) //use to set env using nodejs
