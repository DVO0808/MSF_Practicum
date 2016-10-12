/*function submit(){
  
var name = document.getElementById("name").value;
var userText = document.getElementById("userText").value;
var myDiv = document.getElementById("myDiv");

 var p = document.createElement("p"),
		h1 = document.createElement("h1"),
		h2 = document.createElement("h2"),
    d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);
		
  
    p.innerHTML = d;
    h1.innerHTML = name;
    h2.innerHTML = userText;

    var newThing = $(h1).append(p);
  
    //$("myDiv").appendChild(p);
    $("#myDiv").append(newThing);
    document.getElementById("myDiv").appendChild(h2);
    
   $("#name").val("");
   $("#userText").val("")
    
}
*/


function submit(){
  
var name = $("#name").val().trim();
var userText = $("#userText").val().trim();
//var myDiv = document.getElementById("myDiv");
d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);

var p = $("<p>").html(d);
var h2 = $("<h2>").html(name);
var h3 = $("<h3>").html(userText);


$("#myDiv").append(p);
$("#myDiv").append(h2);
$("#myDiv").append(h3);
    
   $("#name").val("");
   $("#userText").val("")
    
}


