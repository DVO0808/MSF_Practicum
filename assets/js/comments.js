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



function submitInfo(){

   var type = $(".custom-select").val();
   console.log(type);

   var location = $("#example-text-input").val().trim();
   

   var subject = $("#example-text-input").val();
  


   var date = $("#example-date-input").val();
   


   var time = $("#example-time-input").val();
  

   var finalDate = date + ":" + time; 
   console.log(finalDate);

   var type = $("#select").val().trim();
   


   if (type == "2"){

    console.log("this is a deadline");
    console.log("subject is:" + subject);

    $(".countdownText").html("Deadline For " + subject);

function myCountdown() {

            
               var dateFormat = moment(finalDate, 'YYYY-MM-DD:HH');

              //console.log("Travel Date Is: " + travelDate);
              //console.log("Formatted Travel Date Is: " + formatTravelDate);
              // console.log("Type: " + typeof(formatTravelDate));

              var now = moment();

              var diff = moment.duration(moment(dateFormat).diff(moment(now)));

              //console.log(diff);

              var days = parseInt(diff.asDays());

              var hours = parseInt(diff.asHours());

              var hours = hours - days * 24;

              var minutes = parseInt(diff.asMinutes());

              var minutes = minutes - (days * 24 * 60 + hours * 60);

              var seconds = parseInt(diff.asSeconds());

              var seconds = seconds - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);


              //var diffInTimeFromNow = userName + "&#39;s " + travelCountry + " Travel Begins In: " + days + " " + "Days" + " : " + hours + " " + "Hours " + ": " + minutes + " " + "Minutes " + ": " + seconds + " " + "Seconds";

              //console.log(diffInTimeFromNow);
              //var diffInTimeFromNow = $('<div id="text13">' + userName + "&#39;s " + travelCountry + " Travel Begins In: " +
               //'</div>');
              //var diffInTimeFromNow2 = $('<span class="countDown">' + days + "Days" + '</span>'+'<span>'+ ":" + '</span>' + '<span class="countDown">' + hours +  "Hrs" + '</span>'+'<span>'+ ":" + '</span>' +  '<span class="countDown">' + minutes + "Mins" + '</span>'+'<span>'+ ":" + '</span>' + '<span class="countDown">' + seconds + "Secs" + '</span>');

              var diffInTimeFromNow = days + " " + "Days" + " : " + hours + " " + "Hours " + ": " + minutes + " " + "Minutes " + ": " + seconds + " " + "Seconds";

             //var diffInTimeFromNowFinal =  $(diffInTimeFromNow).append(diffInTimeFromNow2);

              $("#display").html(diffInTimeFromNow);

}

 var myCountdownInterval = setInterval(myCountdown, 1000);

   } else{

    console.log("this is a meeting");
    console.log("location is:" +  location);

   var newFormat = moment(date, 'YYYY-MM-DD');

   var formatDate = moment(newFormat).format('MMMM Do, YYYY');

   var newTFormat = moment(time, 'HH');

   var formatTime = moment(newTFormat).format('hh:mm A');

    $("#date").html("Date: " +  formatDate);
    $("#location").html("Location: " + location);
    $("#time").html("Time: " + formatTime);
   }


 $("#example-text-input").val("");


}



$('#select').change( function() {

 if (this.value == "2"){

    $("#selectLabel").html("Subject");

   } else{

    $("#selectLabel").html("Location");


   }

});

