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
    land.style.background = "#FFFFFF";

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
        event.preventDefault(); 
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

    land.style.background = "#FFFFFF";
}

// Add click event listener to wakeLink
wakeLink.addEventListener('click', showWakeSection);

// Add keydown event listener for Ctrl + W
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault(); // Prevent the default action for Ctrl + W
        showWakeSection();
    }
});



// for  powernap  


// Function to handle displaying the power nap section and updating the classes
function showPowerNapSection() {
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
    healthLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.background = "#FFFFFF";
}

// Add click event listener to powerLink
powerLink.addEventListener('click', showPowerNapSection);

// Add keydown event listener for Ctrl + B
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'b') {
        event.preventDefault(); // Prevent the default action for Ctrl + B
        showPowerNapSection();
    }
});


// for work rate 

// Function to handle displaying the work section and updating the classes
function showWorkSection() {
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

    land.style.background = "#FFFFFF";
}

// Add click event listener to workLink
workLink.addEventListener('click', showWorkSection);

// Add keydown event listener for Ctrl + X
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'x') {
        event.preventDefault();
        showWorkSection();
    }
});




function showHealthSection() {
    health.style.display = 'flex';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    exercise.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';

    healthLink.classList.add('active');

    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    exerciseLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.background = "#FFFFFF";
}

// Add click event listener to healthLink
healthLink.addEventListener('click', showHealthSection);

// Add keydown event listener for Ctrl + K
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'y') {
        event.preventDefault(); // Prevent the default action for Ctrl + K
        showHealthSection();
    }
});

// Function to handle displaying the exercise section and updating the classes
function showExerciseSection() {
    exercise.style.display = 'flex';
    health.style.display = 'none';
    sleep.style.display = 'none';
    wakeUp.style.display = 'none';
    powerNap.style.display = 'none';
    work.style.display = 'none';
    home.style.display = 'none';

    exerciseLink.classList.add('active');

    sleepLink.classList.remove('active');
    wakeLink.classList.remove('active');
    powerLink.classList.remove('active');
    healthLink.classList.remove('active');
    workLink.classList.remove('active');

    land.style.background = "#FFFFFF";
}

// Add click event listener to exerciseLink
exerciseLink.addEventListener('click', showExerciseSection);

// Add keydown event listener for Ctrl + ;
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'q') {
        event.preventDefault(); // Prevent the default action for Ctrl + ;
        showExerciseSection();
    }
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

    land.style.backgroundImage = "url('img/data_report.svg')";
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

const shortcutDiv = document.getElementById('shortcut');
let isShortcutDivVisible = false;

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Prevent the default browser action (commonly the browser search function)
        document.getElementById('searchBox').focus();
        
        if (isShortcutDivVisible) {
            shortcutDiv.style.display = 'none';
        } else {
            shortcutDiv.style.display = 'block';
        }
        
        isShortcutDivVisible = !isShortcutDivVisible; // Toggle the visibility state
    }
});
