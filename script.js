const newYear = "1/1/2024";

const _days = document.querySelector('.day');
const _hour = document.querySelector('.hour');
const _minute = document.querySelector('.minute');
const _second = document.querySelector('.second');

function timeCountDown() {
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    _days.innerHTML = formatTime(days);
    _hour.innerHTML = formatTime(hours);
    _minute.innerHTML = formatTime(minutes);
    _second.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);