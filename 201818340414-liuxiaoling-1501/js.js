window.onload = choosePic;

var adImages = new Array("images/reading1.gif", "images/reading2.gif", "images/reading3.gif");
var thisAd = 0;

function choosePic(){
  thisAd = Math.floor((Math.random() * adImages.length));
  document.getElementById("adBanner").src = adImages[thisAd];
	
  rotate();	
}

function rotate(){
  thisAd++;
  if(thisAd == adImages.length){
    thisAd = 0;
  } 
  document.getElementById("adBanner").src = adImages[thisAd];
	
  setTimeout(rotate, 2000);
	
}