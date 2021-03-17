class ApiService {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    async findOrCreateUser(e){
         const response = await fetch(`${this.baseUrl}/users`, {
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
                return response.json()
    }

    async getAllAnimes(id){
        const resp = await fetch(`${this.baseUrl}/users/${id}`) 
        let json = resp.json();
        return await json;  
    }


    async postAnime(e, user_id){
        const response = await fetch(`${this.baseUrl}/animes`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {
                        anime: {
                            title: e.target.children[1].value,
                            rating: e.target.children[3].value,
                            review: e.target.children[5].value,
                            user_id: user_id
                        }
                    }
                )
            })

            return response.json()
    }

    async deleteAnime(e){
        const response = await fetch (`${this.baseUrl}/animes/${e.target.parentNode.dataset.id}`, {
            method: "DELETE"
        })
    }
}
        
