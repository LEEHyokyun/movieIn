export let movie = [
    {
        id : 1,
        title : "Fly to the sky",
        score: 8,
    }, 
    {
        id : 2,
        title : "Road to Busan",
        score: 7,
    },
    {
        id : 3,
        title : "Three idiots",
        score: 9,
    }

]

export const getById = id => {
    //filter returns array
    const filteredMovie = movie.filter((movie) => id === movie.id);
    //filtered data = return array's index 0
    console.log(filteredMovie)
    return filteredMovie[0]
}

export const getmovie = () => movie

export const addmovie = (title, score) => {
    const newmovie = {
        id : movie.length + 1,
        title,
        score
    }
    movie.push(newmovie)
    console.log(movie)
    return movie
}