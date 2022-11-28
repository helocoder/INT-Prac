const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    // res.sendFile(__dirname+"/index.html");
    res.send(
        `
        <h1 id="dat">${new Date()}</h1>
        <script>
        let date = document.getElementById('dat')
        date.addEventListener('mouseover',()=>{
            date.style.color = "red"
        })

        date.addEventListener('mouseout',()=>{
            date.style.color = "black"
        })

        </script>

         `
    )
})

app.listen(8000,()=>{
    console.log("Server is running....")
})