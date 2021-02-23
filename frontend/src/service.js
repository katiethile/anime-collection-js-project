class ApiService {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    findOrCreateUser(e){
        return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    user: {
                        username: e.target.children[1].value
                    }
                })
            })
                .then(resp => {
                    let json = resp.json()
                    console.log(json) 
                    return json     
                })
    }

    postAnime(e, user_id){
        return fetch(`${this.baseUrl}/animes`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {
                        anime: {
                            title: e.target.children.value,
                            rating: e.target.children.value,
                            review: e.target.children.value,
                            user_id: user_id
                        }
                    }
                )
            })
            .then(resp => resp.json())
    }

    deleteAnime(e){
        fetch(`${this.baseUrl}/animes/${e.target.parentNode.dataset.id}`, {
            method: "DELETE"
        })
    }
}