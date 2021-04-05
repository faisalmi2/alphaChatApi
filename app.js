const express =require('express');
const cors=require('cors');

const app = express();

 
const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('connected to port '+PORT);
})

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/api/Users',(req,res)=>{
    res.send([1,2,3,4,5,6])
})