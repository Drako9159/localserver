const movies = [
    {
        "name": "Rick & Morty",
        "img": "rickAndMorty.png",
        "path": "alFiloDelInvierno.mp4"
    },{
        "name": "Antes De Ti",
        "img": "antesDeTi.png",
        "path": "antesDeTi.mp4"
    }
]

//ChargeImagesnumbe
for(let imgCharge = 0; imgCharge <= 65; imgCharge = imgCharge + 1 ){
    let ostec = `img${imgCharge}`;
    let doc = document.getElementById(ostec);
    let checkMov = movies[imgCharge].img;
    let pathImg = `./img/${checkMov}`;
    doc.src = pathImg;
    console.log(pathImg);
}
function play(number){
    document.getElementById("portada0").className = "tempMenu"
    //document.getElementById("closeMov0").className = "closeMovOn"
    //document.getElementById("media0").className = "mediaOn"
    //document.getElementById("video0").className = "videoOn"
    //document.getElementById("nameMov0").className = "nameMovOn"
    
    //document.getElementById("dropImg0").className = "dropImgOff"
    //document.getElementById("dropImg1").className = "dropImgOff"
    //document.getElementById("dropImg2").className = "dropImgOff"
    //document.getElementById("dropImg3").className = "dropImgOff"
    
    let needVideo = movies[number].path
    let again = `./video/${needVideo}`
    document.getElementById("video0").src = again
    let needName = movies[number].name
    document.getElementById("nameMov0").innerHTML = needName
}
function mediaOff(){
    document.getElementById("closeMov0").className = "closeMov0"
    document.getElementById("media0").className = "media0"
    document.getElementById("video0").className = "video0"
    document.getElementById("video0").pause()
    document.getElementById("nameMov0").className = "nameMov0"
    document.getElementById("dropImg0").className = "dropImg0"
    document.getElementById("dropImg1").className = "dropImg0"
    document.getElementById("dropImg2").className = "dropImg0"
    document.getElementById("dropImg3").className = "dropImg0"
}

