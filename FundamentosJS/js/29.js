// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

const consultApi = () => {
    fetch(url)
    .then( (response) =>{
    return response.json()
    })
    .then((result) => {
        result.forEach( comments => {
            console.log(comments)
        })
    })
}

consultApi()