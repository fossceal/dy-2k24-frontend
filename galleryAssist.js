async function getLinks(){
    var links = await fetch('/eventLink.json').then(response => response.json());
    return links;
}
function MasterGOTO(uri){
    var messageBlock = {
        event: "goto",
        data: uri
    }
    window.postMessage(btoa(JSON.stringify(messageBlock)), '*');
}


async function a(key){
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

        // console.log(loc[loc.length - 1]);
        var event = (key).split('&')[0].replace('#', '');
        var picsN = (key).split('&')[1];
        picsN++;
        var fileType = (key).split('&')[2];
        console.log(event, picsN, fileType);
        var pics = [];


        var links = await getLinks();
        console.log(links);
        for (let i = 1; i < picsN; i++) {
            pics.push('/assets/' + event + '/' + i + '.' + fileType);
        }
        // console.log(pics);

        for (let i = 0; i < pics.length; i++) {
            var from;
            var id= "gnx"+i;
            if(i%3 == 0){
                from = "right"
            }
            if(i%3 == 1){
                from="bottom"
            }
            if(i%3 == 2){
                from='left'
            }
            document.getElementById('gallerya').innerHTML += `<img id="${id}"src="` + pics[i] + `" style="width: 100%;height: auto;" onclick="MasterGOTO('${links[i].link}')" from="${from}"
            onMouseEnter ='elem("${id}").style.transform = "scale(1.1)"' onMouseLeave='elem("${id}").style.transform = "scale(1)"'
            >`;
            trackBeacon(id);
        }


        messageBlock = {
            event: "loaded",
            data: pics
        }
        picsJson = JSON.stringify(messageBlock);
        picsEncrypt = btoa(picsJson);

    }

    a("#posterGrid&33&webp")