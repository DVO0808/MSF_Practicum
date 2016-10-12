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


function submit2(){
  
var name = $("#name2").val().trim();
var userText = $("#userText2").val().trim();
//var myDiv = document.getElementById("myDiv");
d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);

var p = $("<p>").html(d);
var h2 = $("<h2>").html(name);
var h3 = $("<h3>").html(userText);


$("#myDiv2").append(p);
$("#myDiv2").append(h2);
$("#myDiv2").append(h3);
    
$("#name2").val("");
$("#userText2").val("")
    
}



function submit3(){
  
var name = $("#name3").val().trim();
var userText = $("#userText3").val().trim();
//var myDiv = document.getElementById("myDiv");
d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);

var p = $("<p>").html(d);
var h2 = $("<h2>").html(name);
var h3 = $("<h3>").html(userText);


$("#myDiv3").append(p);
$("#myDiv3").append(h2);
$("#myDiv3").append(h3);
    
$("#name3").val("");
$("#userText3").val("")
    
}


function submit4(){
  
var name = $("#name4").val().trim();
var userText = $("#userText4").val().trim();
//var myDiv = document.getElementById("myDiv");
d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);

var p = $("<p>").html(d);
var h2 = $("<h2>").html(name);
var h3 = $("<h3>").html(userText);


$("#myDiv4").append(p);
$("#myDiv4").append(h2);
$("#myDiv4").append(h3);
    
$("#name4").val("");
$("#userText4").val("")
    
}




