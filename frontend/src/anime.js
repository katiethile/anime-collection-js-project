class Anime {

    static allAnimes = []

    constructor(anime){
        this.id = anime.id ;
        this.rating = anime.rating; 
        this.title = anime.title;
        this.review = anime.review; 
        Anime.allAnimes.push(this)
    }

    static newAnimeForm(user_id){
    let body = document.getElementById('container')
    let form = 
    `
    <form id="new-anime-form">
    <label>What is your anime you want to add?:</label>
    <input type="text" id="anime-title"/>
    <label>Rate it:</label>
    <input type="text" id="anime-rating"/>
    <label>Review it:</label>
    <input type="text" id="anime-review"/>
    <input type="submit"/>
    <h4>Your current animes:</h4>
    </form>
    `

    body.insertAdjacentHTML('beforeend', form)
    Anime.makeAnime(user_id)
    }

    static makeAnime(user_id){
        let newForm = document.getElementById('new-anime-form')
        newForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.postAnime(e, user_id)
            .then(json => {
                console.log(json)
                newForm.reset()
                let newAnime = new Anime(json)
                newAnime.createAnimeCard()
            })
        })
    }

    createAnimeCard(){
        let p = document.createElement('p')
        p.setAttribute('data-id', this.id)
        p.innerHTML = `${this.title} ~~ ${this.rating} ~~ ${this.review}`
        let removeForm = ` <button type="button" id="${this.id}" class="remove-anime"> Remove anime from collection </button>`
        p.insertAdjacentHTML('beforeend', removeForm)
        this.appendAnime(p)
    }

    appendAnime(p){
        let animes = document.getElementsByClassName('animes-container')
        animes[0].append(p)
        let button = document.getElementById('`${this.id}`')
        this.remove(button)
    }

    remove(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            apiService.deleteAnime(e)
            e.target.parentElement.remove();
        })
    }
}