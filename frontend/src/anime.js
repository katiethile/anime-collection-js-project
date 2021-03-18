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
    <img src="https://i.imgur.com/fHs8bHM.gif" alt="anime"> <br>
    <form id="new-anime-form">
    <label>Anime Title:</label>
    <input type="text" id="anime-title" required/>
    <label>Rate it (1-10):</label>
    <input type="number" id="anime-rating" min=1 max=10 maxlength=2 required/>
    <label>Review it:</label>
    <input type="text" id="anime-review" required/>
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
                newForm.reset()
                let newAnime = new Anime(json)
                newAnime.createAnimeCard()
            })
        })
    }

    createAnimeCard() {
        let p = document.createElement('p')
        let pTitle = document.createElement('p')
        pTitle.classList.add('pTitle')
        p.setAttribute('data-id', this.id)
        p.innerHTML = `${this.title} - ${this.rating} - ${this.review}`
        let removeForm = ` <button type="button" id="${this.id}" class="remove-anime"> Remove Anime </button>`
        p.insertAdjacentHTML('beforeend', removeForm)
        this.appendAnime(p)
    }

    appendAnime(p){
        let animes = document.getElementsByClassName('animes-container')
        animes[0].append(p)
        let button = document.getElementById(`${this.id}`)
        this.remove(button)
    }

    async remove(button){
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            apiService.deleteAnime(e)
                e.target.parentElement.remove();
                Anime.removeAnimeFromArray(e.target.parentNode.dataset.id)
        })
    }

    static removeAnimeFromArray(id) {
        let i=0; 
        for(let a of Anime.allAnimes){
            if(a.id === parseInt(id)){
                Anime.allAnimes.splice(i,1)
            }
            i++ 
        }
    }

    static renderSortBtn = () => {
        const btn = document.createElement('button')
        btn.innerText = "Animes Alpabetized"
        document.body.append(btn)
        btn.addEventListener('click', this.sortedAnimes)
    }

    static sortedAnimes() {
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
        for(let anime of sortedAnimesArray) {
            anime.createAnimeCard()
        }
}
    
}