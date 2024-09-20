const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/Portfolio',(req,res)=>{
   res.render('portfolio.ejs');
})

app.listen(4000,()=>{
    console.log('listening on port 4000')
})