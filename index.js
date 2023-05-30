const express = require('express');
const bodyParser = require('body-parser');

let path = require('path')
let urlencodedparser = bodyParser.urlencoded({extended:true})

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs')














app.get('/', (req,res)=>{
  
    
    res.render('homepage')
  
})
  


app.get('/protocols', (req,res)=>{
  

    var result = []
    res.render('protocols', {"res":result})
  
})


app.get('/detail', (req,res)=>{
    if(req.query.id){
        
        res.render('detail', {"id":req.query.id})
    }
    else{
        res.render('detail')
    }
    
})
  
app.get('/diseases', (req,res)=>{
  
    
    res.render('diseases')
  
})

app.get('/species', (req,res)=>{
  
    
    res.render('species')
  
})


app.use((req,res)=>{
res.redirect('/')
})


const server = app.listen(process.env.PORT || 5000, () => {
const port = server.address().port;
console.log(`Express is working on port ${port}`);
});
  