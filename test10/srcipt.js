const jokeEl = document.getElementById('joke');

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    let response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    })
    let data = await response.json();
    jokeEl.innerHTML = data.joke;
}