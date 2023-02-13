// Fetch API - Async await

const url = "https://jsonplaceholder.typicode.com/comments"


// const consultAPI = () => {
//     fetch(url)
//     .then( response => {
//         return response.json();
//     })
//     .then( result => {
//         result.foreach( comments => {
//             console.log(comments)
//         })
//     })
// }


const consultAPI = async () => {
    const response = await fetch(url);
    const result = await response.json();
}

consultAPI();