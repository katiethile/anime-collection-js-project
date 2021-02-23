class User {
    static allUsers = []
    
    constructor(user){
        this.id = user.id;
        this.username = user.username;
        this.animes = user.animes;
        User.allUsers.push(this)
    }

    static fakeLogin(){
        let newUserForm = document.getElementById('new-user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault();
            apiService.findOrCreateUser(e)
            .then(user => {
                console.log(user)
                let newUser = new User (user)
                newUser.displayUser()
            })
        })
    }

    displayUser(){
        let userBody = document.getElementById('container')
        userBody.innerHTML = ''
        let userGreeting = document.createElement('p')
        userGreeting.setAttribute('data-id', this.id)
        let id = userGreeting.dataset.id
        userGreeting.innerHTML = `<h1>Hey, ${this.username}</h1>`
        userBody.append(userGreeting)
        this.renderAnimes()
        Anime.newAnimeForm(this.id)      
    }

    renderAnimes() {
        if (this.animes) {
            this.animes.forEach(function(anime){
                let newAnime = new Anime(anime)
                newAnime.createAnimeCard()
            })
        }
    }
    
}