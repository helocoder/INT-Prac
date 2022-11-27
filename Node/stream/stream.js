const fs = require('fs');

//reading stream

var data = fs.createReadStream('./dummy.txt');

data.on('data',(chunk)=>{
    console.log(chunk.toString());
});

var wrt = fs.createWriteStream('./dummy.txt');
wrt.write("hey, wrote in new file");
