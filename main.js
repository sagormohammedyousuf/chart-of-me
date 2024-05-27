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


const homeLink = document.getElementById('home-link');
const sleepLink = document.getElementById('sleep-link');
const wakeLink = document.getElementById('wake-link');
const powerLink = document.getElementById('power-link');
const workLink = document.getElementById('work-link');
const healthLink = document.getElementById('health-link');
const exerciseLink = document.getElementById('exercise-link');

const land = document.getElementById('land')


const allLink = document.querySelectorAll('ul li a');


// for sleep //

// Function to handle displaying the sleep section and updating the classes
function showSleepSection() {
    land.style.background = "#D4DCF1";

    sleep.style.display = 'flex';
    health.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';

    sleepLink.classList.add('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');
}

// Add click event listener to sleepLink
sleepLink.addEventListener('click', showSleepSection);

// Add keydown event listener for Ctrl + D
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'd') {
        event.preventDefault(); // Prevent the default action for Ctrl + D
        showSleepSection();
    }
});



// for wake up //
// Function to handle displaying the wake section and updating the classes
function showWakeSection() {
    wakeUp.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';

    wakeLink.classList.add('active');

    sleepLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.background = "#D4DCF1";
}

// Add click event listener to wakeLink
wakeLink.addEventListener('click', showWakeSection);

// Add keydown event listener for Ctrl + W
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'w') {
        event.preventDefault(); // Prevent the default action for Ctrl + W
        showWakeSection();
    }
});



// for  powerlink 

powerLink.addEventListener('click', () => {
    powerNap.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
    powerLink.classList.add('active');

    
    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    // powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');


    land.style.background = "#D4DCF1"

});

workLink.addEventListener('click', () => {
    work.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    home.style.display = 'none';



    workLink.classList.add('active');


    
    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');

    land.style.background = "#D4DCF1"
    
});

healthLink.addEventListener('click', () => {
    health.style.display = 'flex';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';
    // healthLink.classList.add('active');


    
    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.add('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.background = "#D4DCF1"
});

exerciseLink.addEventListener('click', () => {
    exercise.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';



    
    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.add('active');
    workLink.classList.remove('active');

    land.style.background = "#D4DCF1"
});






// home section functionality //


function showHomeSection() {
    exercise.style.display = 'none';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'flex';

    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.backgroundImage = "url('img/bar-chart-build.jpg')";
    land.style.backgroundSize = "100vw 100vh";
    land.style.backgroundRepeat = "no-repeat";
}

// Add click event listener to homeLink
homeLink.addEventListener('click', showHomeSection);

// Add keydown event listener for Ctrl + H
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault(); 
        showHomeSection();
    }
});





// shortcut //

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Prevent the default browser action (commonly the browser search function)
        document.getElementById('searchBox').focus();
    }
});
