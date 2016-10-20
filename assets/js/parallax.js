

function updateUIGetMeetingValue(obj) {
         $("#date").html("Date: " + obj.date);
        $("#location").html("Location: " + obj.location);
        $("#time").html("Time: " + obj.time);

}

function updateUIGetDeadlineValue(deadline) {

  $(".countdownText").html("Deadline For " + deadline.subject);
  var myCountdownInterval = setInterval(myCountdown, 1000);
  
}


function updateUIGetCommentValue(obj, index) {
    $("#myDiv").empty();
 
    var p = $("<p>").html(obj.date);
    var h2 = $("<h2>").html(obj.name);
    var h3 = $("<h3>").html(obj.userText);

    $("#myDiv").append(p);
    $("#myDiv").append(h2);
    $("#myDiv").append(h3);

    $("#name").empty();
    $("#userText").empty();
 


}

function updateUIGetToDoListChildAdded() {
  
}


function updateUIGetToDoListChildRemoved() {
  
}

function updateUIGetToDoListChildAddedCompleted() {
  
}


function updateUIGetToDoListChildRemovedCompleted() {
  
}




function updateUILogOutSucess() {
  location.href = "index.html";
}

function displayErr(err) {
    var p1 = $('<p>').html(err.code);
    var p2 = $('<p>').html(err.message);
    $('#errMsg').append(p1);
    $('#errMsg').append(p2);
}


function updateUIAuthErr(err) {
    displayErr(err);
}

function addListener(sel, eve, fn) {
    $(document).on(eve, sel, fn);
}

function clickSignOutBtn() {
 signOut();
}

var imgs = [
  "http://www.rtjsjg.com/data/out/258/7028692-faded-background.jpg",
  "http://unsplash.s3.amazonaws.com/batch%206/Bird-Profile-Wellington-New-Zealand.jpg",
  "http://unsplash.s3.amazonaws.com/batch%205/greece-2.jpg",
  "http://unsplash.s3.amazonaws.com/batch%202/06.jpg"
           ]

$(document).ready(function(){
  
  initializeFireBase ();
  reLogin();
  addListener('#signOutBtn', 'click', clickSignOutBtn);
  addListener('#btn', 'click', submit);
  
   //addListener('#btn2', 'click', submit2);
   //addListener('#btn3', 'click', submit3);
   //addListener('#btn4', 'click', submit4);
   addListener('#mtngDeadlineBtn', 'click', submitInfo);


  var img;
  
  for(var i=0; i<imgs.length; i++){
    img = new Image();
    img.className = 'bgItems';
    
    img.onload = function(){
      var str = "'"+this.src+"'";
      $("#bg").append('<div class="img" style="background-image:url('+str+');"></div>');
      
    };
    
    img.src = imgs[i];
    
  }
  
  // end of loading images //
  
$(window).bind('scroll',function(e){
    parallaxScroll();
});


  
});

 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.02))+'px');
    $('.blockItem').css('top',(0-(scrolled*.5))+'px');
    
}



