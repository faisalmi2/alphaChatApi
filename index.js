
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const config=require('./config');
const cors=require('cors');
const bodyParser=require('body-parser'); //latest express has solution to it 

const app=express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json());

app.use('/api',userRoutes.routes);
app.use('/api',blogRoutes.routes);

const PORT=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Asalamulikum");
})

app.listen(PORT,function(){    
    console.log(`Listing to port ${PORT}`);
})
