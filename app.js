window.onscroll = function () { myFunction()};
var masterMute = true;
var ready = false;
masterDialog = new DialogMaster('masterDialog');
masterDialog.setDialog('We would like to play music',()=>{masterMute = false;ready = true;dakshaVid.play();
    yanthraVid.play();},()=>{masterMute = true;ready=true;dakshaVid.play();
        yanthraVid.play();});
masterDialog.show();
// Get the header
var header = document.getElementById("logo");
var DY = document.getElementsByClassName('DY')[0];
var D24 = document.getElementsByClassName('D24')[0];
var DCollision = document.getElementById("d");
var YCollision = document.getElementById("y")
var dBg = document.getElementById('dbg');
var yBg = document.getElementById('ybg')

var dakshaVid = document.getElementById('dakshaVid');
var yanthraVid = document.getElementById('yanthraVid');


// Get the offset position of the navbar
var sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("logoToHeader");
        DY.classList.add("DD")
        D24.classList.add("DD")

        
    } else {
        header.classList.remove("logoToHeader");

        DY.classList.remove("DD");
        D24.classList.remove("DD");

    }
}

fade = (elem) => {
    elem.style.opacity = .2;
}
var Dt;
var Yt;
DCollision.addEventListener('mouseover',(d)=>{

  // DCollision.style.backdropFilter = 'invert(1)'
  if(ready){

    Dt = setTimeout(()=>{
    fade(header)},3000)

    dBg.style.width = '100%'
    if(!masterMute){
        dakshaVid.muted = false;
    }
}
})
DCollision.addEventListener('mouseleave',(d)=>{
  // DCollision.style.backdropFilter = 'unset'
    dBg.style.width = '0%'
    dakshaVid.muted = true;
    clearTimeout(Dt);
    clearTimeout(Yt);
    header.style.opacity = 1;
    
})

YCollision.addEventListener('mouseenter',(d)=>{
    if(ready){
    Yt = setTimeout(()=>{
    fade(header)}
    ,3000)
    yBg.style.width = '100%'
    if(!masterMute){
        yanthraVid.muted = false;
    }
}
    // YCollision.style.backdropFilter = 'invert(1)'

})
YCollision.addEventListener('mouseleave',(d)=>{
    yBg.style.width = '0%'
    yanthraVid.muted = true;
    clearTimeout(Dt);
    clearTimeout(Yt);
    header.style.opacity = 1;
    // YCollision.style.backdropFilter = 'unset'
    
})






