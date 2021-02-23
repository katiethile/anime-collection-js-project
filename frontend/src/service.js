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
                            title: e.target.children.value,
                            rating: e.target.children.value,
                            review: e.target.children.value,
                            user_id: user_id
                        }
                    }
                )
            })
            return response.json()
    }

    async deleteAnime(e){
        const response = await fetch (`${this.baseUrl}/animes/${e.target.parentNode.dataset.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
            })
            return response.json()
        }
        
    }
    