'use strict';

const zeroFirstFormat = (value) => {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
};

const outputTime = document.querySelector('.time');
const dateTime = () => {
    const currentDatetime = new Date();
    const day = zeroFirstFormat(currentDatetime.getDate());
    const month = zeroFirstFormat(currentDatetime.getMonth() + 1);
    const year = currentDatetime.getFullYear();
    const hours = zeroFirstFormat(currentDatetime.getHours());
    const minutes = zeroFirstFormat(currentDatetime.getMinutes());
    const seconds = zeroFirstFormat(currentDatetime.getSeconds());

    return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
};

setInterval(
    () => outputTime.innerHTML = dateTime(),
    1000
);

const timeNode = document.getElementById('time-node');


const timeHtml = document.querySelector('.time');
const today = new Date();
const weekDay = {
    weekday: 'long'
};
const day = {
    day: 'numeric'
};
const year = {
    year: 'numeric'
};
const month = {
    month: 'long'
};
const getWeekDay = today.toLocaleString('en-US', weekDay);
const getDay = today.toLocaleString('en-US', day);
const getYear = today.toLocaleString('en-US', year);
const getMonth = today.toLocaleString('en-US', month);
const data = new Date();
const hour = data.getHours();
const minutes = data.getMinutes();
const seconds = data.getSeconds();
const dateHtml = document.querySelector('.date');

const dateTimeSecond = () => {
    const currentDatetime = new Date();
    const hours = zeroFirstFormat(currentDatetime.getHours());
    const minutes = zeroFirstFormat(currentDatetime.getMinutes());
    const seconds = zeroFirstFormat(currentDatetime.getSeconds());

    return `Today is ${getWeekDay}, ${getDay} ${getMonth} ${getYear} year,  ${hours} hour ${minutes} minutes ${seconds} seconds`;
};

setInterval(
    () => dateHtml.innerHTML = dateTimeSecond(),
    1000
);