async function getLinks(linkfle) {
    var links = await fetch(`/${linkfle}`).then(response => response.json());
    return links;
}
function MasterGOTO(uri) {
    var messageBlock = {
        event: "goto",
        data: uri
    }
    window.postMessage(btoa(JSON.stringify(messageBlock)), '*');
}

async function NoRegistration() {
    window.alert("No Registration Required");
}

async function a(key, links, _isTogether = false) {
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


    var links = await getLinks(links);
    console.log(links);
    for (let i = 1; i < picsN; i++) {
        pics.push('/assets/' + event + '/' + i + '.' + fileType);
    }
    // console.log(pics);
    var globalID = "VOLTAIR" + event;
    if (!_isTogether) {
        for (let i = 0; i < pics.length; i++) {
            var from;
            var id = event + "gnx" + i;
            if (i % 3 == 0) {
                from = "right"
            }
            if (i % 3 == 1) {
                from = "bottom"
            }
            if (i % 3 == 2) {
                from = 'left'
            }

            if (links[i].link == "NO_REGISTRATION") {
                document.getElementById('gallerya').innerHTML += `<img id="${id}"src="` + pics[i] + `" style="width: 100%;height: auto;" onclick="NoRegistration()" from="${from}"
                onMouseEnter ='elem("${id}").style.transform = "scale(1.2)"' onMouseLeave='elem("${id}").style.transform = "scale(1)"'
                >`;
            } else {
                document.getElementById('gallerya').innerHTML += `<img id="${id}"src="` + pics[i] + `" style="width: 100%;height: auto;" onclick="MasterGOTO('${links[i].link}')" from="${from}"
                onMouseEnter ='elem("${id}").style.transform = "scale(1.2)"' onMouseLeave='elem("${id}").style.transform = "scale(1)"'
                >`;
            }
            trackBeacon(id);
        }
    } else {
        if (links[0].link == "NO_REGISTRATION") {
            document.getElementById('gallerya').innerHTML += `<div style="grid-column: 1/4;display:grid;    grid-template-columns: repeat(3, 1fr);grd-template-rows:1fr;gap:0px;transition:500ms" id="${globalID}" >
            <img id="${globalID}+${0}" src="` + pics[0] + `" style="height:auto;width:100%;transition: 500ms;" onclick="NoRegistration()" from="left"
            onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
            onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
            >
            <img id="${globalID}+${1}" src="` + pics[1] + `" style="height:auto;width:100%;transition: 500ms;" onclick="NoRegistration()" from="bottom"
            onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
            onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
            >
            <img id="${globalID}+${2}" src="` + pics[2] + `" style="height:auto;width:100%;transition: 500ms;" onclick="NoRegistration()" from="right"
            onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
            onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
            >
            </div>`;
        } else {
            document.getElementById('gallerya').innerHTML += `<div style="grid-column: 1/4;display:grid;    grid-template-columns: repeat(3, 1fr);grd-template-rows:1fr;gap:0px;transition:500ms" id="${globalID}" >
                <img id="${globalID}+${0}" src="` + pics[0] + `" style="height:auto;width:100%;transition: 500ms;" onclick="MasterGOTO('${links[0].link}')" from="left"
                onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
                onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
                >
                <img id="${globalID}+${1}" src="` + pics[1] + `" style="height:auto;width:100%;transition: 500ms;" onclick="MasterGOTO('${links[0].link}')" from="bottom"
                onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
                onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
                >
                <img id="${globalID}+${2}" src="` + pics[2] + `" style="height:auto;width:100%;transition: 500ms;" onclick="MasterGOTO('${links[0].link}" from="right"
                onMouseEnter ='elem("${globalID}").style.transform = "scale(1.1)"'
                onMouseLeave='elem("${globalID}").style.transform = "scale(1)"';'
                >
                </div>`;
        }
        trackBeacon(`${globalID}+${0}`);
        trackBeacon(`${globalID}+${1}`);
        trackBeacon(`${globalID}+${2}`);
    }






}


async function setup() {
    trackBeacon("viva")
    trackBeacon("tiftle")
    trackBeacon("subtitle")
    await a("#daksha&12&webp", "dakshaEve.json")
    await a("#merch&3&webp", "merch.json", true)
    await a("#yanthra&36&webp", "yanthraEve.json")
}

setup();