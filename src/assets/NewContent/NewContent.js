const movies = [
    {
        "name": "Al filo del invierno",
        "img": "alFiloDelInvierno.png",
        "path": "alFiloDelInvierno.mp4"
    },{
        "name": "Aniquilación",
        "img": "aniquilacion.png",
        "path": "aniquilacion.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Apostol",
        "img": "apostol.png",
        "path": "apostol.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
    },{
        "name": "Dune",
        "img": "dune.png",
        "path": "dune.mp4"
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
    document.getElementById("media0").className = "mediaOn"
    document.getElementById("video0").className = "videoOn"
    let needVideo = movies[number].path
    let again = `H:/movies/${needVideo}`
    document.getElementById("video0").src = again


}
function mediaOff(){
    document.getElementById("media0").className = "media0"
    document.getElementById("video0").className = "video0"
    document.getElementById("video0").pause()
    

}

