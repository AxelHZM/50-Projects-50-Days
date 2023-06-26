const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const timeEL = document.querySelector('.time');
const dateEL = document.querySelector('.date');
const toggle = document.querySelector('.toggle');


//Event listener to toggle between light and dark mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (!html.classList.contains('dark')) {
        html.classList.add('dark');
        toggle.innerHTML = 'Light mode'
    } else {
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark mode'
    }

})

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function setTime () {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM': 'AM';

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEL.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;

    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000);