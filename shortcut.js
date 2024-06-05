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

const land = document.getElementById('land');
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
const searchBox = document.getElementById('searchBox');


let isShortcutDivVisible = false;

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Prevent the default browser action (commonly the browser search function)
        searchBox.focus();
        toggleShortcutDiv();
    }
});



const kbdDiv = document.getElementById('kbd-div');


searchBox.addEventListener('focus', function() {
    kbdDiv.style.display = 'none';
});

searchBox.addEventListener('blur', function() {
    kbdDiv.style.display = 'flex';
});

searchBox.addEventListener('focus', function() {
    toggleShortcutDiv();
   
  
});

function toggleShortcutDiv() {
    if (isShortcutDivVisible) {
        shortcutDiv.style.display = 'none';
    } else {
        shortcutDiv.style.display = 'block';
    }
    
    isShortcutDivVisible = !isShortcutDivVisible; // Toggle the visibility state
}

document.body.addEventListener('click', function(event) {
    if (!shortcutDiv.contains(event.target) && event.target !== searchBox) {
        // Click occurred outside of shortcutDiv and searchBox
        shortcutDiv.style.display = 'none';
        isShortcutDivVisible = false;
    }
});

// search-box // 



document.getElementById('searchBox').addEventListener('keyup', function() {
    let value = this.value.trim().toLowerCase(); 
    let rows = document.querySelectorAll('#table li');
    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        if (value === '') { 
            row.style.display = ''; 
            row.style.background = ''; 
        } else { 
            row.style.display = text.includes(value) ? '' : 'none';
            row.style.background = text.includes(value) ? '#ebd0ff' : ''; 
        }
    });
});



//  chart type shortcuts const sleep0 = document.getElementById('sleep-0');
const sleep1 = document.getElementById('sleep-1');
const sleep2 = document.getElementById('sleep-2');
const sleep3 = document.getElementById('sleep-3');
const sleep4 = document.getElementById('sleep-4');
const sleep5 = document.getElementById('sleep-5');
const sleep6 = document.getElementById('sleep-6');
const sleep0 = document.getElementById('sleep-0');

const wakeUp0 = document.getElementById('wake-up-0');
const wakeUp1 = document.getElementById('wake-up-1');
const wakeUp2 = document.getElementById('wake-up-2');
const wakeUp3 = document.getElementById('wake-up-3');
const wakeUp4 = document.getElementById('wake-up-4');
const wakeUp5 = document.getElementById('wake-up-5');
const wakeUp6 = document.getElementById('wake-up-6');


const powerNap1 = document.getElementById("power-nap-1");
const powerNap2 = document.getElementById("power-nap-2");
const powerNap3 = document.getElementById("power-nap-3");
const powerNap4 = document.getElementById("power-nap-4");
const powerNap5 = document.getElementById("power-nap-5");
const powerNap6 = document.getElementById("power-nap-6");
const powerNap0 = document.getElementById("power-nap-0");


const workRate1 = document.getElementById("work-rate-1");
const workRate2 = document.getElementById("work-rate-2");
const workRate3 = document.getElementById("work-rate-3");
const workRate4 = document.getElementById("work-rate-4");
const workRate5 = document.getElementById("work-rate-5");
const workRate6 = document.getElementById("work-rate-6");
const workRate0 = document.getElementById("work-rate-0");


const healthRate1 = document.getElementById("health-rate-1");
const healthRate2 = document.getElementById("health-rate-2");
const healthRate3 = document.getElementById("health-rate-3");
const healthRate4 = document.getElementById("health-rate-4");
const healthRate5 = document.getElementById("health-rate-5");
const healthRate6 = document.getElementById("health-rate-6");
const healthRate0 = document.getElementById("health-rate-0");


const exercise1 = document.getElementById("exercise-1");
const exercise2 = document.getElementById("exercise-2");
const exercise3 = document.getElementById("exercise-3");
const exercise4 = document.getElementById("exercise-4");
const exercise5 = document.getElementById("exercise-5");
const exercise6 = document.getElementById("exercise-6");
const exercise0 = document.getElementById("exercise-0");


// Initially hide all sleep elements except sleep0
sleep1.classList.add('hidden');
sleep2.classList.add('hidden');
sleep3.classList.add('hidden');
sleep4.classList.add('hidden');
sleep5.classList.add('hidden');
sleep6.classList.add('hidden');
sleep0.classList.add('visible');


// Initially hide all wakeUP elements except wakeUp0
wakeUp1.classList.add('hidden');
wakeUp2.classList.add('hidden');
wakeUp3.classList.add('hidden');
wakeUp4.classList.add('hidden');
wakeUp5.classList.add('hidden');
wakeUp6.classList.add('hidden');
wakeUp0.classList.add('visible');


// Initially hide all powerNap elements except powerNap 4 // 
powerNap1.classList.add('hidden');
powerNap2.classList.add('hidden');
powerNap3.classList.add('hidden');
powerNap4.classList.add('hidden');
powerNap5.classList.add('hidden');
powerNap6.classList.add('hidden');
powerNap0.classList.add('visible');



workRate1.classList.add('hidden');
workRate2.classList.add('hidden');
workRate3.classList.add('hidden');
workRate4.classList.add('hidden');
workRate5.classList.add('hidden');
workRate6.classList.add('hidden');
workRate0.classList.add('visible');


healthRate1.classList.add('hidden');
healthRate2.classList.add('hidden');
healthRate3.classList.add('hidden');
healthRate4.classList.add('hidden');
healthRate5.classList.add('hidden');
healthRate6.classList.add('hidden');
healthRate0.classList.add('visible');


exercise1.classList.add('hidden');
exercise2.classList.add('hidden');
exercise3.classList.add('hidden');
exercise4.classList.add('hidden');
exercise5.classList.add('hidden');
exercise6.classList.add('hidden');
exercise0.classList.add('visible');

document.addEventListener("keydown", function(event) {
    if (event.key === '1') {
        sleep1.classList.add('visible');
        sleep1.classList.remove('hidden');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');


        wakeUp1.classList.add('visible');
        wakeUp1.classList.remove('hidden');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');


        powerNap1.classList.add('visible');
        powerNap1.classList.remove('hidden');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');


        workRate1.classList.add('visible');
        workRate1.classList.remove('hidden');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');



        healthRate1.classList.add('visible');
        healthRate1.classList.remove('hidden');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible');


        
        exercise1.classList.add('visible');
        exercise1.classList.remove('hidden');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');
        exercise6.classList.add('hidden');
        exercise6.classList.remove('visible');

    } else if (event.key === '2') {
        sleep2.classList.add('visible');
        sleep2.classList.remove('hidden');

      
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');

        wakeUp2.classList.add('visible');
        wakeUp2.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');

        powerNap2.classList.add('visible');
        powerNap2.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');

        workRate2.classList.add('visible');
        workRate2.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');
        
        healthRate2.classList.add('visible');
        healthRate2.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible')

        exercise2.classList.add('visible');
        exercise2.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');
        exercise6.classList.add('hidden');
        healthRate6.classList.remove('visible')
    } else if (event.key === '3') {
        sleep3.classList.add('visible');
        sleep3.classList.remove('hidden');
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');

        wakeUp3.classList.add('visible');
        wakeUp3.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');

        powerNap3.classList.add('visible');
        powerNap3.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');


        workRate3.classList.add('visible');
        workRate3.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');

        healthRate3.classList.add('visible');
        healthRate3.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible');

        exercise3.classList.add('visible');
        exercise3.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');
        exercise6.classList.add('hidden');
        exercise6.classList.remove('visible');
    } else if (event.key === '4') {
        sleep4.classList.add('visible');
        sleep4.classList.remove('hidden');
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');

        wakeUp4.classList.add('visible');
        wakeUp4.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');

        powerNap4.classList.add('visible');
        powerNap4.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');


        workRate4.classList.add('visible');
        workRate4.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');
        

        healthRate4.classList.add('visible');
        healthRate4.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible');

        
        exercise4.classList.add('visible');
        exercise4.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');
        exercise6.classList.add('hidden');
        exercise6.classList.remove('visible');


    } else if (event.key === '5') {
        
        sleep5.classList.add('visible');
        sleep5.classList.remove('hidden');
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        

        wakeUp5.classList.add('visible');
        wakeUp5.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');

        powerNap5.classList.add('visible');
        powerNap5.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');

        
        workRate5.classList.add('visible');
        workRate5.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');

        healthRate5.classList.add('visible');
        healthRate5.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');

        exercise5.classList.add('visible');
        exercise5.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise6.classList.add('hidden');
        exercise6.classList.remove('visible');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
    }else if (event.key === '6') {
        
        sleep6.classList.add('visible');
        sleep6.classList.remove('hidden');
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep0.classList.add('hidden');
        sleep0.classList.remove('visible');
        

        wakeUp6.classList.add('visible');
        wakeUp6.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp0.classList.add('hidden');
        wakeUp0.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');


        powerNap6.classList.add('visible');
        powerNap6.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap0.classList.add('hidden');
        powerNap0.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');

        
        workRate6.classList.add('visible');
        workRate6.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate0.classList.add('hidden');
        workRate0.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        

        healthRate6.classList.add('visible');
        healthRate6.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate0.classList.add('hidden');
        healthRate0.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');


        exercise6.classList.add('visible');
        exercise6.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise0.classList.add('hidden');
        exercise0.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');

    }
     else if (event.key === '0') {
        sleep0.classList.add('visible');
        sleep0.classList.remove('hidden');
        sleep1.classList.add('hidden');
        sleep1.classList.remove('visible');
        sleep2.classList.add('hidden');
        sleep2.classList.remove('visible');
        sleep3.classList.add('hidden');
        sleep3.classList.remove('visible');
        sleep4.classList.add('hidden');
        sleep4.classList.remove('visible');
        sleep5.classList.add('hidden');
        sleep5.classList.remove('visible');
        sleep6.classList.add('hidden');
        sleep6.classList.remove('visible');

        wakeUp0.classList.add('visible');
        wakeUp0.classList.remove('hidden');
        wakeUp1.classList.add('hidden');
        wakeUp1.classList.remove('visible');
        wakeUp2.classList.add('hidden');
        wakeUp2.classList.remove('visible');
        wakeUp3.classList.add('hidden');
        wakeUp3.classList.remove('visible');
        wakeUp4.classList.add('hidden');
        wakeUp4.classList.remove('visible');
        wakeUp5.classList.add('hidden');
        wakeUp5.classList.remove('visible');
        wakeUp6.classList.add('hidden');
        wakeUp6.classList.remove('visible');

        powerNap0.classList.add('visible');
        powerNap0.classList.remove('hidden');
        powerNap1.classList.add('hidden');
        powerNap1.classList.remove('visible');
        powerNap2.classList.add('hidden');
        powerNap2.classList.remove('visible');
        powerNap3.classList.add('hidden');
        powerNap3.classList.remove('visible');
        powerNap4.classList.add('hidden');
        powerNap4.classList.remove('visible');
        powerNap5.classList.add('hidden');
        powerNap5.classList.remove('visible');
        powerNap6.classList.add('hidden');
        powerNap6.classList.remove('visible');


        workRate0.classList.add('visible');
        workRate0.classList.remove('hidden');
        workRate1.classList.add('hidden');
        workRate1.classList.remove('visible');
        workRate2.classList.add('hidden');
        workRate2.classList.remove('visible');
        workRate3.classList.add('hidden');
        workRate3.classList.remove('visible');
        workRate4.classList.add('hidden');
        workRate4.classList.remove('visible');
        workRate5.classList.add('hidden');
        workRate5.classList.remove('visible');
        workRate6.classList.add('hidden');
        workRate6.classList.remove('visible');



        healthRate0.classList.add('visible');
        healthRate0.classList.remove('hidden');
        healthRate1.classList.add('hidden');
        healthRate1.classList.remove('visible');
        healthRate2.classList.add('hidden');
        healthRate2.classList.remove('visible');
        healthRate3.classList.add('hidden');
        healthRate3.classList.remove('visible');
        healthRate4.classList.add('hidden');
        healthRate4.classList.remove('visible');
        healthRate5.classList.add('hidden');
        healthRate5.classList.remove('visible');
        healthRate6.classList.add('hidden');
        healthRate6.classList.remove('visible');



        exercise0.classList.add('visible');
        exercise0.classList.remove('hidden');
        exercise1.classList.add('hidden');
        exercise1.classList.remove('visible');
        exercise2.classList.add('hidden');
        exercise2.classList.remove('visible');
        exercise3.classList.add('hidden');
        exercise3.classList.remove('visible');
        exercise4.classList.add('hidden');
        exercise4.classList.remove('visible');
        exercise5.classList.add('hidden');
        exercise5.classList.remove('visible');
        exercise6.classList.add('hidden');
        exercise6.classList.remove('visible');
    }
});

// day name shortcut //

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === ',') {
      wakeDisplay = !wakeDisplay; 
      updateChart();
    }
  });
  

  // key for hide data /
  
   // Function to toggle dataset visibility
   function toggleDatasetVisibility(chart, datasetIndex) {
    let meta = chart.getDatasetMeta(datasetIndex);
    meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
    chart.update();
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '.') {
        toggleDatasetVisibility(myChart, 0);
    }
  });
  






  // chart full screen // 

  const canvasList = document.querySelectorAll('canvas');
  const chartTypeImgList = document.querySelectorAll('#content div img');
  
  let toggleState = false; 
  
  document.addEventListener('keydown', function(e){
      if(e.ctrlKey && e.key === '*') {
          toggleState = !toggleState; 
  
          canvasList.forEach(function(canvas) {
              if (toggleState) {
                  canvas.style.width = '60%';
              } else {
                  canvas.style.width = ''; 
              }
          });
  
          chartTypeImgList.forEach(function(chartTypeImg) {
              if (toggleState) {
                  chartTypeImg.style.display = 'none';
              } else {
                  chartTypeImg.style.display = ''; 
              }
          });
      }
  });
  