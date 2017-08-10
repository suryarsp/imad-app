console.log('Loaded!');


//Working of changing HTML tags by js elements

var html_Element=document.getElementById('foo');
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
 
 img.onclick=function(){
     
   img.style.borderRadius="40px";
   img.style.borderStyle="dotted";   
   
 };