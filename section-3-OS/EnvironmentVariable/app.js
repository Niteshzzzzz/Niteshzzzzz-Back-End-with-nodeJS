const { log } = require('console');
const fs = require('fs')

const  data = fs.readFileSync('./.env').toString();

data.split(/\r?\n/).forEach(variable => {
    let [key, value] = variable.split('=')
    process.env[key] = value;
});
console.log(process.env);
console.log('hii');
