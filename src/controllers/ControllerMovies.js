const Reader = require("../utils/reader");
const movies = Reader.readJsonFile("../src/assets/NewContent/movies.json");
const MoviesArchive = require("../services/ServiceArchive");


class PlayMovies{
    static getName(number){
        return MoviesArchive.nameMovie(movies, number)
    }
    static getImg(number){
        return MoviesArchive.imgMovie(movies, number)
    }
    static getPath(number){
        return MoviesArchive.pathMovie(movies, number)
    }
    
}

module.exports = PlayMovies