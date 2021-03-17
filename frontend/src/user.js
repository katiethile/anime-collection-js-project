class User {
    static allUsers = []

    constructor(user){
        this.id = user.id
        this.username = user.username
        this.animes = user.animes
        User.allUsers.push(this)
    }

    static fakeLogin(){
        let newUserForm = document.getElementById('new-user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.findOrCreateUser(e)
                .then(user => {
                    // console.log(user)
                    let newUser = new User(user)
                    newUser.displayUser()
                })
        })
    }

    displayUser() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let userGreeting = document.createElement('p')
        userGreeting.setAttribute('data-id', this.id)
        let id = userGreeting.dataset.id
        userGreeting.innerHTML = `<h2>Hey, ${this.username}!</h2>`
        body.append(userGreeting)
        apiService.getAllAnimes()

        .then(animes => {
            for (let i=0; i < animes.length; i++){
                if (this.id == animes[i].user_id){
                    let userAnimes = new Anime(animes[i]);
                    userAnimes.createAnimeCard();
                }
            }
        })
        Anime.newAnimeForm(this.id)
    }
}