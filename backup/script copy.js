/////////////////////
//On Window Load
//////////////////////////
$(window).load(function() {
   $('#loading-screen').fadeOut('slow');//remove loading screen after content loads
   window.onunload = function(){ window.scrollTo(0,0); }//scroll to top if page is refreshed
  //Start Commands
    setTimeout(function(){
      curtainCall();//moves image at start of page
      TweenLite.to($('#title'), 0.5, {"width":"20%"});//logo animation
      document.getElementById('rap-song').play();//start song
      tileCall(1.0, 0.3, 4);//Set Description Movement(speed,speedChange,amount)
    },2000);//curtain animation
});

//////////////////////////
//FUNCTIONS
//////////////////////////
//set content
function setContent(img){
  $('#hand-content-image').attr("src", img);
  TweenLite.to($('#hand-content-wrap'), 1.2, {"top":"241px"});
  TweenLite.to($('#hands'), 2.9, {"width":"100%"});
}
//start tile movement
function tileCall(speed, change, amount){
  for(i = 1; i <= amount; i++){
      TweenLite.to($('#left-info-' + i), speed+=change, {"right":"0%"});
      TweenLite.to($('#right-info-'+ i), speed+=change, {"left":"0%"});
  }
}
//Curtain open function (test animation)
function curtainCall(){
  ropeCounter = 0;
  var startRope = setInterval(function(){
    if (ropeCounter < -49){
      clearInterval(startRope);
      $('#curtain-frame').remove();
    }
    else{
      ropeCounter -= 0.25;
      document.getElementById("left-curtain").style.left = ropeCounter + '%';
      document.getElementById("right-curtain").style.right = ropeCounter + '%';
    }
  },6.25);
}























/*
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//SCRAP YARD
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//////////////////////////
//Old loading screen
//////////////////////////
var counter = 0;
var increase = Math.PI/120;

setInterval(animation,10);

function animation(){
if (document.getElementById("loading-text")){
y = Math.sin(counter*2);
  counter += increase;
  document.getElementById("loading-text").style.top = -((y*10)-40)+"px";
}
}

*/