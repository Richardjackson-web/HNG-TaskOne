const day = document.getElementById("day");
const time = document.getElementById("time");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
let currentDay = days[today.getDay()];
day.innerHTML = currentDay;

const theTime = new Date();
const seconds = theTime.getUTCMilliseconds();
const minutes = theTime.getUTCMinutes();
const hour = theTime.getUTCHours();
const currentTime = `${hour}:${minutes}:${seconds}`;
time.innerHTML = currentTime;