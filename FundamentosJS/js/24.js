// DOM events - clicks

const heading = document.querySelector('.heading');

heading.addEventListener('click', (content) => {
        heading.textContent = "You clicked the header"
})

const links = document.querySelectorAll('.navegacion a');


links.forEach( link => {
    link.addEventListener('click', () => {
        link.textContent = "You clicked a link"
    })

})
