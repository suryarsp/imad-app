var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page1Content={
    
    heading:'Surya|imadApp',
    title:'Page1',
    date:'Aug 8,2017',
    content:`
     <p class="para"> 
     This is content of page. This is content of page This is content of page1This is content of page1This is content of page1
    This is content of pageThis is content of page This is content of page1This is content of page1This is content of page1
    This is content of page This is content of page This is content of page1 This is content of page1 This is content of page1
   <p class="para">
    This is content of page1 This is content of page1 This is content of page1This is content of page1 This is content of page1 
    This is content of page1 This is content of page1 This is content of page1 This is content of page1 This is content of page1
    </p>
    };
    
function createTemplate (data) {
var title= data.title;
var heading=data.heading;
var data=data.data;
var content=data.content;

var htmlTemplate =`
<html>
<head>
    <title>${heading}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
     <div class="container" align="center">
     <a href="/">Home</a>   <hr>
     <h1>${title}</h1>
     <h2>${date}</h2>
     <div>
     ${content}
    </div>
    </div>
</body>
</html>`
 ;   
    return htmlTemplate;

}



app.get('/page1',function(req,res){
    res.send(createTemplate(page1Content));
});

app.get('/page2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/page3',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/surya.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'surya.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
