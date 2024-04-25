async function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

var _libDEBUG = false;
var beaconPack = [

]
function elem(id){
    return document.getElementById(id);

}


class animate{

  track(){
    window.addEventListener("scroll", function() {
      const currentScrollTop = window.scrollY;
      const scrnHt = this.window.innerHeight
      
      beaconPack.forEach(function(b){
        var pos = b.pos()
        const d = scrnHt - pos.y;
        const v = ((d/scrnHt)*100)
        if(v>5 && v<100){
if(_libDEBUG){          console.log("beacon in view",b.self.getAttribute('id'),v);}
          if(b.from == "left"){
            elem(b.self.getAttribute('id')).style.transform = "translateX(0)";
          }else if(b.from == "right"){
            elem(b.self.getAttribute('id')).style.transform = "translateX(0)";
          }else if(b.from == "top"){
            elem(b.self.getAttribute('id')).style.transform = "translateY(0)";
          }
          else if(b.from == "bottom"){
            elem(b.self.getAttribute('id')).style.transform = "translateY(0)";
          }            elem(b.self.getAttribute('id')).style.opacity = 1;
          elem(b.self.getAttribute('id')).style.scale = 1;

    
        }else if(v<0){
          if(_libDEBUG){
            console.log("beacon out of view");
            console.log(currentScrollTop,pos.y)
          }


          if(b.from == "left"){
            elem(b.self.getAttribute('id')).style.transform = "translateX(20%)";
          }else if(b.from == "right"){
            elem(b.self.getAttribute('id')).style.transform = "translateX(-20%)";
          }else if(b.from == "top"){
            elem(b.self.getAttribute('id')).style.transform = "translateY(-20%)";
          }else if(b.from == "bottom"){
            elem(b.self.getAttribute('id')).style.transform = "translateY(20%)";
        } elem(b.self.getAttribute('id')).style.opacity = 0;
          elem(b.self.getAttribute('id')).style.scale = 0.8;
        }else{

        }
      });
    });
  }
}

class beacon{
  self;
  pos = ()=>{return getPos(elem(this.self.getAttribute('id')))};
  from;
  constructor(id){
    if(_libDEBUG){
      console.log("Trying to create beacon", id);
    }
    this.self = elem(id);
    this.from = this.self.getAttribute('from');
    this.self.style.opacity = 0;
    this.self.style.scale = 0.8;
    if(this.from == "left"){
      this.self.style.transform = "translateX(20%)";
    }else if(this.from == "right"){
      this.self.style.transform = "translateX(-20%)";
    }else if(this.from == "top"){
      this.self.style.transform = "translateY(-20%)";
    }else if(this.from == "bottom"){
      this.self.style.transform = "translateY(20%)";
    }
    if(_libDEBUG){
      console.log("created beacon", id);
    }
  }
}

function getPos(elem){
  const element = elem;
  
  const rect = element.getBoundingClientRect();
  if(_libDEBUG){
    console.log({x:rect.x,y:rect.y});
  }
  return {
    x: rect.x,
    y: rect.y
  };
}


function trackBeacon(id){
  var b = new beacon(id);
  beaconPack.push(b);
  if(_libDEBUG){
    console.log("setting tracker for", id)
    console.log(beaconPack);
  }
}

anim= new animate();
anim.track();