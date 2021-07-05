// Imports
import { fromEvent, interval } from 'rxjs'; 
import { map, buffer, filter, debounceTime, takeUntil } from 'rxjs/operators';


// Elements
const timeElem = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const waitButton = document.querySelector('#wait');
const resetButton = document.querySelector('#reset');

// Observables
const second$ = interval(1000);
const startClick$ = fromEvent(startButton, "click");
const stopClick$ = fromEvent(stopButton, "click");
const waitClick$ = fromEvent(waitButton, "click");
const resetClick$ = fromEvent(resetButton, "click");

// Default state of time
const setDefaultState = (value) => {
    timeElem.textContent = value === 0 ? "00:00:00" : time;
}
setDefaultState(0);

// Variebles
let started = false;
let paused = false;
let totalTime = 0; 

if (!started) {
    stopButton.classList.add('disabled');
    waitButton.classList.add('disabled');
    resetButton.classList.add('disabled');
}


// Triggers of actions


// Function of render time
const renderTime = () => {
    totalTime++;
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor(totalTime / 60) % 60;
    let seconds = totalTime % 60;
    timeElem.textContent = 
    (hours <= 9 ? "0" + hours : hours) + ":" +
    (minutes <= 9 ? "0" + minutes : minutes) + ":" +
    (seconds <= 9 ? "0" + seconds : seconds);
}

// Start trigger
startClick$.subscribe(() => {
    if (!started && !paused) {
        started = true;
        if (started) {
            stopButton.classList.remove('disabled');
            waitButton.classList.remove('disabled');
            resetButton.classList.remove('disabled');
        }
        second$
        .pipe(
            takeUntil(stopClick$)
        )
        .pipe(
            takeUntil(doubleWaitClick$)
        )
        .subscribe(() => {
            renderTime()
        });
    }
});

// Double-click trigger
const doubleWaitClick$ = waitClick$
.pipe(
    buffer(waitClick$.pipe(debounceTime(300))),
    map(clicks => clicks.length),
    filter(clicksLength => clicksLength >= 2)
);

doubleWaitClick$.subscribe(() => {
    if (started && !paused) {
        paused = true;
        if (paused) {
            startButton.classList.add('disabled');
            stopButton.classList.add('disabled');
            resetButton.classList.add('disabled');
        }
    } else {
        paused = false;
        second$
        .pipe(
            takeUntil(stopClick$)
        )
        .pipe(
            takeUntil(doubleWaitClick$)
        )
        .subscribe(() => {
            renderTime()
        });
        if (!paused) {
            startButton.classList.remove('disabled');
            stopButton.classList.remove('disabled');
            resetButton.classList.remove('disabled');
        }
    }
});

// Stop trigger
stopClick$.subscribe(() => {
    started = false;
    totalTime = 0;
    setDefaultState(0);
    if (!started) {
        stopButton.classList.add('disabled');
        waitButton.classList.add('disabled');
        resetButton.classList.add('disabled');
    }
})

// Reset trigger
resetClick$.subscribe(() => {
    totalTime = 0;
    setDefaultState(0);
})

