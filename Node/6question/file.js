const file = require('fs');
const data = file.readFileSync('./config.json');
console.log(data.toString());
//write//

// var data = "Hello i,m content from file :)";
// file.writeFile('sample.txt',data,(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{

//         console.log("file write success");
//     }
// });
// //reading//
// file.readFile('sample.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());

//     }
// })


//reading json//
// file.readFile(data,'utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })