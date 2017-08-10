var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



 var pages={
 'page1':{
    
    heading:'Surya @page1|imadApp',
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
    </p>`
    },
    'page2':{
         heading:'Surya @page 2|imadApp',
    title:'Page2',
    date:'Aug 8,2017',
    content:`
     <p class="para"> 
     This is content of page. This is content of page This is content of page2
     </p>`
    },
    'page3':{
        heading:'Surya @Page 3|imadApp',
    title:'Page3',
    date:'Aug 8,2017',
    content:`
     <p class="para"> 
     This is content of page. This is content of page This is content of page2
     </p>`
    },
 };
    
    


    
function createTemplate (data) {
var title= data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate =`
<html>
<head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
     <div class="container" align="center">
     <a href="/">Home</a>   <hr>
     <h1>${heading}</h1>
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






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;
app.get('/counter', function (req, res) {
    
    counter +=1;
    res.send(counter.toString() );
  
});



var names=[];
app.get('/submit-name/:name', function (req, res) { 
                                                        //We get query string grom url
                                                       // [/submit-name]?=xxxx-->Query String
//Get the names from req
var name=req.query.name;

names.push(name);
//can't send array of strings as response
//JSON solves this problem


res.send(JSON.stringify(names));
});

app.get('/:pageNumber',function(req,res){
    //pagenumber==page-1
    //pages[pageNumber]==[]Content object for Page 1
    var pageNumber=req.params.pageNumber;
    //Array of Objects accessed using function
    //pages is array name, [pageNumber] is index of each object
    //Each object conatains data that is sent as resposne 
    //Response is rendered as HTML page
    res.send(createTemplate(pages[pageNumber]));
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});







// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
