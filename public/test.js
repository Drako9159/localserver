const PlayMovies = require("../src/controllers/ControllerMovies.js");
    //console.log(PlayMovies.getImg(2));
    /*const line = document.getElementById("img0")
    line.src = "../src/assets/NewContent/img/apostol.png"
    */
  
    for(let imgCharge = 0; imgCharge <= 3; imgCharge = imgCharge + 1 ){
        let ostec = `img${imgCharge}`;
        let chargeImg = PlayMovies.getImg(imgCharge);
        let pathImg = `../src/assets/NewContent/img/${chargeImg}`;

        console.log(pathImg);
       // let doc = document.getElementById(ostec)
        //
        //
        //"../src/assets/NewContent/img/apostol.png"
        

    }
    