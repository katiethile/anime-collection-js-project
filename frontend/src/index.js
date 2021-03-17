const apiService = new ApiService()

document.addEventListener("DOMContentLoaded", () => {
    User.fakeLogin();
    renderButton();
})

const renderButton = () => {
    const btn = document.createElement('button')
    btn.innerText = "Animes Alpabetized"
    document.body.append(btn)
    btn.addEventListener('click', sortedAnimes)
}
    function sortedAnimes() {
        let sortedAnimesArray = Anime.allAnimes.sort((a,b) => {
            if (a.title < b.title){
                return -1
            }
            if(b.title > a.title){
                return 1
            }
            else {
                return 0
            }
        })
        const animes = document.querySelectorAll('div#animes-container p'); //return a nodelist of p tags
        animes.forEach((anime) => {
            anime.remove()
        })
        for(anime of sortedAnimesArray) {
            anime.createAnimeCard()
        }

}