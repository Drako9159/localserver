
class MoviesArchive{
    static nameMovie(movies, number){
        return movies[number].name
    }
    static imgMovie(movies, number){
        return movies[number].img
    }
    static pathMovie(movies, number){
        return movies[number].path
    }
}
module.exports = MoviesArchive;