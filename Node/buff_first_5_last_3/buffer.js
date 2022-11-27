const data = "hello i,m iloo maah";
const buff = Buffer.alloc(data.length);
buff.fill(data);

console.log(buff.toString());
console.log(buff.toString("utf-8",0,5));
console.log(buff.toString('utf-8',data.length-3,data.length))

