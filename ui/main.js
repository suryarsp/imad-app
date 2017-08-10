console.log('Loaded!');


//Working of changing HTML tags by js elements

/*var html_Element=document.getElementById('foo');
html_Element.innerHTML=
`   <div>
    <h2>Activities done</h2>
    <div>
    Finished Creating Profile page<hr>
    Added CSS styles and more responsive<hr>
    Made changes in server.js using Express js and handler functions<hr>
    Learned functions and object in js <hr>
    More terminologies on network understood<hr>
    Learned how DNS works
    </span>
    </div>
    </div>
`;

//Changing Img border radius and Border style

var img=document.getElementById('imgright');
var rad=0;
 function resize(){
     rad= rad + 0.5;
      img.style.borderRadius= rad +"px";
       img.style.borderStyle="dotted";
     
     
 }
 img.onclick=function(){
     
   var interval=setInterval(resize,80);
   
 };*/
 
 //Counter Endpoint 
 
 
 var button=document.getElementById('counter');
 button.onclick=function(){
     
     //Create request to counter endpoint
     var request=new XMLHttpRequest();
     
     //Capture response and store it in var
     request.onreadystatechange=function(){
         
         if(request.readystate===XMLHttpRequest())
         {
             //Take action on request
             if(request.status===200)
             //Received in network
             {
                 var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
              }
             
          }
          };
          //Make the request
          request.open('GET','http://rspsuriya777.imad.hasura-app.io/counter',true);
          request.send(null);
          };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 