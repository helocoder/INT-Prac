const fs =  require('fs');

var file = fs.readFile('./dummy.txt',(err,data)=>{
    if(err)
    console.log(err);
    else if(data.length==0)
    console.log("File is empty:(");
    else
    console.log("File have some data to view:)");
});

