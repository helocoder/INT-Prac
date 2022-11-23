const { CLIENT_RENEG_LIMIT } = require("tls");

const data = "This is class";

const buff = Buffer.alloc(data.length);
buff.fill(data);

console.log(buff);
console.log(buff.toString('utf-8',0,5));
console.log(buff.toString('utf-8',(data.length-3),data.length));
