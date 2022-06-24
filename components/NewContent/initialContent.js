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
for(let imgCharge = 0; imgCharge <= 15; imgCharge = imgCharge + 1 ){
    let ostec = `img${imgCharge}`;
    let doc = document.getElementById(ostec);
    let checkMov = movies[imgCharge].img;
    let pathImg = `../components/NewContent/img/${checkMov}`;
    doc.src = pathImg;
}

function play(number){
    document.getElementById("video").style.display = "flex"
    let needVideo = movies[number].path;
    let again = `../components/NewContent/video/${needVideo}`;
    document.getElementById("video0").src = again;
    let needName = movies[number].name;
    document.getElementById("needName").innerHTML = needName;
}
function mediaOff(){
    document.getElementById("video").style.display = "none";
    document.getElementById("video0").pause();
}
