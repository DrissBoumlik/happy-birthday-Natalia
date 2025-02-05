import confetti from 'canvas-confetti';
import particlesJson from '@/plugins/particles/particles.min.json';


function initParticlesJS() {
    try {
        if (document.querySelector('#particles-js')) {
            window.particlesJS('particles-js', particlesJson);
        }
    } catch (error) {
        console.error(error);
    }
}

function initDarkMode(selector) {
    document.querySelector(selector)
        .addEventListener('click', function (event) {
            try {
                const _this = event.target.closest(selector);
                _this.classList.add('pushed');
                setTimeout(() => _this.classList.remove('pushed'), 300);

                toggleDarkMode(
                    document.body,
                    { darkmode: 'dark-mode', lightmode: 'light-mode' },
                    { name: 'mode', darkmodeValue: 'dark', lightmodeValue: 'light' }
                );
            } catch (error) {
                console.log(error);
            }
    });
}

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
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function toggleDarkMode(element, classes, cookieData) {
    if (element.classList.contains(classes.lightmode)) {
        element.classList.add(...classes.darkmode.split(' '));
        element.classList.remove(...classes.lightmode.split(' '));
        // setCookie(cookieData.name, cookieData.darkmodeValue);
    } else {
        element.classList.remove(...classes.darkmode.split(' '));
        element.classList.add(...classes.lightmode.split(' '));
        // setCookie(cookieData.name, cookieData.lightmodeValue);
    }
}



export { initDarkMode, initParticlesJS, randomInRange, makeConfetti };
