/////////////////////
//On Window Load
//////////////////////////
$(window).load(function() {
   $('#preload-images').remove();//remove preloaded images
   $('#loading-screen').fadeOut('slow');//remove loading screen after content loads
   window.onunload = function(){ window.scrollTo(0,0); }//scroll to top if page is refreshed
  //Start Commands
    setTimeout(function(){
      curtainCall();//moves image at start of page
      TweenLite.to($('#title'), 0.5, {"width":"20%"});//logo animation
      document.getElementById('rap-song').play();//start song
      tileCall(1.0, 0.3, 5);//Set Description Movement(speed,speedChange,amount)
    },2000);//curtain animation
});

//////////////////////////
//FUNCTIONS
//////////////////////////
//set content
  var bio = "George Walker Bush is a third generation politician in his family with his grandfather being a senator and his father as the 41st president. Bush Jr in his early years was a known troublemaker but despite this was able to attend Yale in 1964. After college he enlisted in the US. National Guard and was able to bypass the waiting list. It is questioned whether he fulfilled his military career but was discharged in the year 1974. He then went to the Harvard school of business and became a successful businessman.  He later became the senator of Texas in 1994. Then in a heated and very highly controversial election in 2000 became the 43rd president of the USA. Bush Jr. is known to have on of the most highest and lowest approval ratings in US history making him one of the most controversial presidencies in the US.";
  var state = "Bush's biggest role and most praised was his response to the 9/11 terrorist attacks. His speech and initial declaration of war against terrorism gave the american people hope that the lives lost would not be in vain. However he lowered morale with his prevention of terrorist attacks in 2003 with the invasion of Iraq due to the potential of nuclear weapons of mass destruction. He was also condemned for his administration's actions in response to hurricane katrina further ruining the morale of the country and his approval rating.";
  var executive = "George W. Bush appointed John G. Roberts, chief justice, and Samuel Alito into the supreme court during his 8 years as president.";
  var diplomat = "Invaded Iraq and Afghanistan Condemned Iran, Iraq, and North Korea as the 'Axis of Evil'. Bush also appointed many ambassadors during his time period that totaled around 420 appointments. Signed the US-India Civil Nuclear Agreement with India, greatly improving relations between the countries";
  var commander = "Ordered the invasion of Afghanistan in response to Al-Qaeda 9/11 attacks in 2000. Ordered the invasion of Iraq in 2003 after it was believed that they were amassing weapons of mass destruction, which were never found in the end.";
  var legislator = "Created the Patriot Act which gave increased surveillance powers to agencies such as the NSA and CIA. Created No Child Left Behind Act which helped standardized education through standardized test and school ratings. Created the department of homeland security. Attempted to push for immigration and social security reform but never had enough support to pass through congress. Enacted Medicare Part D and vetoed State Children's Health Insurance Program legislation expanding federally funded health care benefits";
  var party = "Re-ran in 2004 for the presidential election and won.";
  var guard = "Implemented the 'bush tax cuts' of 2001 and 2003 which lowered the marginal tax rates for all taxpayers. Greatly increased federal spending 70% but only increased federal revenue by 25% Pursued free trade policy Sought offshore oil drilling and domestic oil drilling.";
  var bestRole = "His best role which can also be considered his worst role in the later portion of his presidency would be chief of state. His highest approval ratings came in wake of the terrorist attacks on September 11, 2001. He gave many speeches that states they would prevent further attacks and stop Al-Qaeda. He was able to provide millions of Americans with hope for the future and became a symbol of America.";
//pick content
function setContent(img,title,description, maxWidth){
    window.scrollTo(0,0);
    $('#content').fadeOut('fast', function(){
        TweenLite.to($('#content'), 0.5, {"max-width": maxWidth +'px'});
        $('#bush-image').attr("src", img);
        $("#bush-title").text(title);
        $("#swap-text").text(description);
        $('#content').fadeIn('fast')
    });
}
//show works cited
var toggle = 0;
function showCitation(){
  if( toggle%2 == 0){//do or don't counter
    $('#works-cited').fadeIn('fast');
    pageHeight = $(document).height();//get page height
    window.scrollTo(0,pageHeight);//go to page heght
    toggle++;
  }else{
    $('#works-cited').fadeOut('fast');
    toggle++;
  }
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