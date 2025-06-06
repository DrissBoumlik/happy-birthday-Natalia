import confetti from 'canvas-confetti';
import { initParticlesJS } from "./scripts/functions";
import 'lazysizes';

initParticlesJS();

let calls = 0, intervalId = null, intervalConfettiId = null;
function makeConfetti() {
    let myCanvas = document.querySelector('#my-canvas');
    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti({
        angle: randomInRange(80, 110),
        particleCount: 500,
        spread: 160
    });
    calls++;
    if (calls >= 5) {
        clearInterval(intervalId);
        clearInterval(intervalConfettiId);
    }
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}


document.getElementById('cat').addEventListener('click', function boom() {
    this.querySelector('img').src = "assets/img/cat2.webp";
    offset = 20;
    updateCountdown();
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
});

let offset = 2;
function updateCountdown() {
    // Specific birthday on February 6th
    const now = new Date();
    now.setHours(now.getHours() + offset);
    const birthdayDate = new Date(now.getFullYear(), 5, 7, 0, 0, 0); // Note: Month is 0-indexed

    const totalSeconds = (birthdayDate - now) / 1000;
    let days = 0, hours = 0, minutes = 0, seconds = 0;
    
    if (totalSeconds > 0) {
        days = Math.floor(totalSeconds / 3600 / 24);
        hours = Math.floor((totalSeconds / 3600) % 24);
        minutes = Math.floor((totalSeconds / 60) % 60);
        seconds = Math.floor(totalSeconds % 60);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }


    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        document.getElementById('message').innerHTML = `Happy Birthday <span class='mylove'>NATALIA</span>! 🎉🎂
                                                        <br/><span>& Piss on you 💦</span>`;
        intervalConfettiId = setInterval(makeConfetti, 3000);
        makeConfetti()
    }
}

// Update countdown every second
updateCountdown();
intervalId = setInterval(updateCountdown, 1000);
