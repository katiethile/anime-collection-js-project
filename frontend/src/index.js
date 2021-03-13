const apiService = new ApiService()

document.addEventListener("DOMContentLoaded", function(){
    User.fakeLogin();
    getHighestRatings();
})

const allAnimesFetch = async () => {
    let x = await apiService.displayAllAnimes()
    let sorted = x.sort((b, a) => {
        return a.rating -  b.rating
    })
        let y = sorted.map(animeRating => {
            document.body.append(animeRating.rating + animeRating.title ).first 
    })
}

const getHighestRatings = () => {
    let r = document.createElement('button')
    r.innerHTML = "Highest Anime Rating"
    document.body.append(r)
    r.addEventListener('click', allAnimesFetch)
}