const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

// Async Await Syntax
async function generateJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
                }
            })

    const data = await response.json();

    jokeEL.innerHTML = data.joke;
} 

// Promise syntax and .then
// function generateJoke () {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => jokeEL.innerHTML = data.joke);
// }

