let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function start() {
    if (!isRunning) {
        startTime = Date.now();
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("printTimeDisplay").textContent = ""; // Clear printed times on reset
}

function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    document.getElementById("display").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

function printTime() {
    const currentTime = document.getElementById("display").textContent;
    const printTimeDisplay = document.getElementById("printTimeDisplay");
    printTimeDisplay.textContent = `Lap : ${currentTime}`;
}
