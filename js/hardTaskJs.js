'use strict';
const timeNode = document.getElementById('time-node'); 
const getCurrentTimeString = () => {
   return new Date().toTimeString().replace(/ .*/, '');
};

setInterval(
   () => timeNode.innerHTML = getCurrentTimeString(),
   1000
);

const today = new Date();
const weekDay = { weekday: 'long' };
const day = {day: 'numeric'};
const year = {year: 'numeric'};
const month = {month: 'long'};
const getWeekDay = today.toLocaleString('en-US', weekDay);
const getDay = today.toLocaleString('en-US', day);
const getYear = today.toLocaleString('en-US', year);
const getMonth = today.toLocaleString('en-US', month);
const dateHtml = document.querySelector('.date');

dateHtml.innerHTML = `Today is ${getWeekDay}, ${getDay} ${getMonth} ${getYear} year`;
console.log(getCurrentTimeString());


//=====================================================================
const secondToday = new Date();
const outputTime = document.querySelector('.time'); 
const outputDate = document.querySelector('.second');
const now = secondToday.toLocaleDateString('en-US');
outputDate.innerHTML = `${now} -`;
setInterval(
    () => outputTime.innerHTML = getCurrentTimeString(),
    1000
 );


 