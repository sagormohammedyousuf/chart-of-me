const health = document.getElementById('health-rate-div');
const sleep = document.getElementById('sleep-div');
const wakeUp = document.getElementById('wake-up-div');
const exercise = document.getElementById('exercise-div');
const powerNap = document.getElementById('power-nap-div');
const work = document.getElementById('work-rate-div');
const home = document.getElementById('home-page');

// Set display to "none" for each element
health.style.display = 'none';
sleep.style.display = 'none';
wakeUp.style.display = 'none';
exercise.style.display = 'none';
powerNap.style.display = 'none';
work.style.display = 'none';



const sleepLink = document.getElementById('sleep-link');
const wakeLink = document.getElementById('wake-link');
const powerLink = document.getElementById('power-link');
const workLink = document.getElementById('work-link');
const healthLink = document.getElementById('health-link');
const exerciseLink = document.getElementById('exercise-link');

sleepLink.addEventListener('click', () => {
    sleep.style.display = 'flex';
    health.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
});

wakeLink.addEventListener('click', () => {
    wakeUp.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
});

powerLink.addEventListener('click', () => {
    powerNap.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
});

workLink.addEventListener('click', () => {
    work.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    home.style.display = 'none';
});

healthLink.addEventListener('click', () => {
    health.style.display = 'flex';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
});

exerciseLink.addEventListener('click', () => {
    exercise.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';

 
});
