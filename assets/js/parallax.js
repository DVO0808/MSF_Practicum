var imgs = [
  "http://www.rtjsjg.com/data/out/258/7028692-faded-background.jpg",
  "http://unsplash.s3.amazonaws.com/batch%206/Bird-Profile-Wellington-New-Zealand.jpg",
  "http://unsplash.s3.amazonaws.com/batch%205/greece-2.jpg",
  "http://unsplash.s3.amazonaws.com/batch%202/06.jpg"
           ]

$(document).ready(function(){
  
  //console.log($.stellar());
  //$('#bg').stellar();
  
  //$.stellar();
  
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

/*
function myCountdown() {

            
              var travelDate = "2016-11-12";
              var formatTravelDate = moment(travelDate, 'YYYY-MM-DD');

              //console.log("Travel Date Is: " + travelDate);
              //console.log("Formatted Travel Date Is: " + formatTravelDate);
              // console.log("Type: " + typeof(formatTravelDate));

              var now = moment();

              var diff = moment.duration(moment(formatTravelDate).diff(moment(now)));

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

*/


