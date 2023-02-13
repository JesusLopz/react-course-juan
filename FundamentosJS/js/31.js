// Fetch API - async await (multiple calls)

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// ================================================
// SLOW
// ================================================
const consultAPI = async () => {

    const start = performance.now()

    const response = await fetch(url);
    const result = await response.json();
    // console.log(result)


    const response2 = await fetch(url2);
    const result2 = await response2.json();
    // console.log(result2);

    const end = performance.now()

    console.log(`First async execution ${end-start} ms`)

}

consultAPI();

// =================================================
// FAST
// =================================================

const consultAPI2 = async () => {

    const start = performance.now()

    const [ response, response2 ] = await Promise.all([ fetch(url), fetch(url2) ])
    const result = await response.json()
    const result2 = await response2.json()

    // console.log(result)
    // console.log(result2)

    const end = performance.now()

    console.log(`Second async execution ${end-start} ms`)
}

consultAPI2()