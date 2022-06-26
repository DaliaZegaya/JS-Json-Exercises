const basicAPI= "https://moviesmern.herokuapp.com/movies/"
async function getMovie() {
    try {
       return await fetch (`${basicAPI}all`)
        .then (response=>console.log(response))
    }
    catch (error) {
        error
    }
    finally {}

}
getMovie()

function creatMovie() {
    const data= {
    movie: {
    image: input.value,
    linkToMovie: "https://www.imdb.com/title/tt0480249/?ref_=tt_sims_tt_i_2",
    movieName: "MORBIUS",
    rating: 7.2,
    synopsis: "BLA BLA BLA"
  }
}
fetch (`${basicAPI}saveMovie`,
{
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
})
}

async function getMovieByName() {
    try {
        return await fetch (`${basicAPI}movie/searchByName/${search_input.value}`)
        .then (res=>res.json())
    }
    catch (error) {}
    finally {}
}


