import express from 'express';


// mon port

Port = process.env.Port || 3000

const app = express();


app.listen(Port,()=>{
    console.log(`Server running on : https://localhost:${Port}`);
})







