
const message = document.querySelector('#message')

const addMovie = (event) => {
event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x' 
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)


const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.textContent} Deleted!!`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked') 
        if (event.target.classList.contains('checked')){
            message.textContent = `${event.target.textContent} Watched!!`
        } else {
            message.textContent = `${event.target.textContent} Unwatched??`
        } 
    
    revealMessage()
    

    
}

const revealMessage = () => { 
    message.classList.remove('hide')
    setTimeout(() => message.classList.toggle('hide'), 1000)

}