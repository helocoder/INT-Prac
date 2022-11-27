const fs =  require('fs');

var file = fs.readFile('./dummy.txt',(err,data)=>{
    if(err)
    console.log(err);
    else if(data.length==0)
    console.log("File is empty:(");
    else
    {
        var content = "appending data into new file :}"
        fs.appendFile('./newfile.txt',content,(err)=>{
            if(err)
            console.log(err);
            else
            console.log("data appended..")
        });
        
    }
});

