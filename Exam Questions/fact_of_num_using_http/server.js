const fs= require('fs');
const http = require('http');

const server= http.createServer((req,res)=>{
res.write('Factorial Progam')

// var ans =1;
//   while(data)
//   {
//     ans=ans*data;
//     data=data-1;

//   }

// res.end(ans);

});

server.listen(5000,()=>{
    console.log("listening.....");
})

