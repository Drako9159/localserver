const movies = [
    {
        "name": "El Hombre Del Norte",
        "img": "elHombreDelNorte.png",
        "path": "elHombreDelNorte.mp4"
    },{
        "name": "Aniquilación",
        "img": "aniquilacion.png",
        "path": "aniquilacion.mp4"
    },{
        "name": "Interestelar",
        "img": "interestelar.png",
        "path": "interestelar.mp4"
    },{
        "name": "Apostol",
        "img": "apostol.png",
        "path": "apostol.mp4"
    },{
        "name": "Finch",
        "img": "finch.png",
        "path": "finch.mp4"
    },{
        "name": "El Proyecto Adam",
        "img": "elProyectoAdam.png",
        "path": "elProyectoAdam.mp4"
    },{
        "name": "Monster Hunter",
        "img": "monsterHunter.png",
        "path": "monsterHunter.mkv"
    },{
        "name": "Predestinación",
        "img": "predestination.png",
        "path": "predestination.mp4"
    },{
        "name": "Sin Tiempo Para Morir",
        "img": "sinTiempoParaMorir.png",
        "path": "sinTiempoParaMorir.mp4"
    },{
        "name": "EL Hijo",
        "img": "elHijo.png",
        "path": "elHijo.mp4"
    },{
        "name": "Uncharted",
        "img": "uncharted.png",
        "path": "uncharted.mp4"
    },{
        "name": "Sully",
        "img": "sully.png",
        "path": "sully.mp4"
    },{
        "name": "Sonic 2",
        "img": "sonic2.png",
        "path": "sonic2.mp4"
    },{
        "name": "Chip And Dale",
        "img": "chipAndDale.png",
        "path": "chipAndDale.mkv"
    },{
        "name": "Insidious 3",
        "img": "insidious3.png",
        "path": "insidious3.mp4"
    },{
        "name": "Insidious 4",
        "img": "insidious4.png",
        "path": "insidious4.mp4"
    }
]
//ChargeImagesnumbe
for(let imgCharge = 0; imgCharge <= 15; imgCharge = imgCharge + 1 ){
    let ostec = `img${imgCharge}`;
    let doc = document.getElementById(ostec);
    let checkMov = movies[imgCharge].img;
    let pathImg = `../src/assets/NewContent/img/${checkMov}`;
    doc.src = pathImg;
    console.log(pathImg);
}
function play(number){
    document.getElementById("closeMov0").className = "closeMovOn"
    document.getElementById("media0").className = "mediaOn"
    document.getElementById("video0").className = "videoOn"
    document.getElementById("nameMov0").className = "nameMovOn"
    document.getElementById("dropImg0").className = "dropImgOff"
    document.getElementById("dropImg1").className = "dropImgOff"
    document.getElementById("dropImg2").className = "dropImgOff"
    document.getElementById("dropImg3").className = "dropImgOff"
    let needVideo = movies[number].path
    let again = `../src/assets/NewContent/video/${needVideo}`
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

