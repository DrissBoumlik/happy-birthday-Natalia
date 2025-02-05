
import { initParticlesJS, makeConfetti } from "./scripts/functions";
import 'lazysizes';

initParticlesJS();

function updateCountdown() {
    // Specific birthday on February 6th
    const now = new Date();
    const birthdayDate = new Date(now.getFullYear(), 1, 6); // Note: Month is 0-indexed

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
        document.getElementById('message').innerHTML = "Happy Birthday <span class='mylove'>GHIZLANE</span>! 🎉🎂";
        makeConfetti();
    }
}

// Update countdown every second
updateCountdown();
const intervalId = setInterval(updateCountdown, 1000);
