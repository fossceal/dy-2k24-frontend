vid = document.getElementById("bgVid");
// scroll to top on window load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
async function playVid() {

    await sleep(1000);
    vid.addEventListener("ended", function () {
        //do next
    });
}
async function skip(){
    elem('bgVid').style.opacity = 0;
    elem('title').style.display = "flex";
    elem("Boogie").style.opacity = 0;
    elem('skipbt').style.opacity = 0;
    await sleep(400);
    elem('bgVid').style.opacity = 0;
    await sleep(500);
    await this.setTimeout(() => {
        elem('Boogie').style.display = "none";
    },400)
    elem('bgVid').style.display = "none";
    elem('skipbt').style.display = "none";
    elem("hBG").style.opacity = 1;
    document.body.style.overflow = "scroll"

}

elem('skipbt').addEventListener('click', async function () {
    skip();
});

// skip();
async function bis(){
    await backspace(0);
            _isAnimRunning = true;
            await sleep(500);
            await typeIn("> Generate an image of a folklore deity worship inside a cave with dy logo in the centre  just above the idol, grey scale,dark");
            await sleep(1000)
            await backspace(0,true);
            elem("rw").style.opacity = 0;
            await this.setTimeout(() => {
                elem('rw').style.display = "none";
            },400)
            elem("rw2").style.display = "flex";
            elem("rw2").style.opacity = 1;
            await sleep(500);
            elem("sliderMatte").style.width = "12%"
            await sleep(200);
            elem("sliderMatte").style.width = "48%"
            await sleep(200);
            elem("sliderMatte").style.width = "90%"
            await sleep(300);
            elem("sliderMatte").style.width = "100%"
            elem("rw2").style.opacity = 0;
            elem('bgVid').style.opacity = 1;
            elem('bgVid').style.display = "block";
            await this.setTimeout(() => {
                elem('rw2').style.display = "none";
            },400)
            elem('bgVid').play();
            
            elem('bgVid').addEventListener("ended",async function(){

                // elem('bgVid').style.opacity = 0;
                

                elem('title').style.display = "flex";
                await sleep(400);
                elem('bgVid').style.opacity = 0;
            await sleep(500);
            elem('bgVid').style.display = "none";

            }
            )
            elem('skipbt').style.opacity = 0;
            await sleep(3500);
            elem("hBG").style.opacity = 1;
            elem('skipbt').style.display = "none";

            elem("Boogie").style.opacity=0;
            await sleep(200);
            elem("Boogie").style.display="none";
            document.body.style.overflow = "scroll"
            
}

async function jizz(){
    if(_isAnimRunning){}else{
        _isAnimRunning = true;
        bis();
    }
}

window.addEventListener('keydown', async function (e) {
    if (e.key == " ") {
        if (_isAnimRunning) {
            // _isAnimRunning = false;
        }else{
           bis()
        }
    }
});

async function backspace(n = 8,f = false) {
    var mig = elem("miggity");
    var pig = elem("thempiIsgay")
    var jig = mig.innerHTML.split("");
    var vig = pig.innerHTML.split("");
    len = jig.length - n
    lens = vig.length - n

    for (var i = 0; i < len; i++) {
        // console.log(jig);
        if(f){
            await sleep(3)
            jig.pop();
            
        }else{
        await sleep(50);
        jig.pop();
        
        }
        mig.innerHTML = jig.join("");

    }
    for(var i=0;i<lens;i++){
        if(f){
            await sleep(3);
            vig.pop();
        }else{
            await sleep(50);
            vig.pop();
        }
        pig.innerHTML = vig.join("")

    }
}

async function typeIn(text) {
    var mig = elem("miggity");
    var pig = elem("thempiIsgay");
    var jig = mig.innerHTML.split("");
    var vig = pig.innerHTML.split("");
    for (var i = 0; i < text.length; i++) {
        await sleep(25);
        jig.push(text[i]);
        vig.push(text[i]);
        mig.innerHTML = jig.join("");
        pig.innerHTML = vig.join("");
    }
}


var _isAnimRunning = false;
