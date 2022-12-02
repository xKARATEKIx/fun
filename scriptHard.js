'use strict';

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0, len = week.length; i < len; i++) {
    let html = week[i];
    let day = new Date("December 1, 2022 23:15:30");
    let currentDay = day.getDay();
   
    console.log(day);
    if(i == currentDay) {
        html = html.bold(); // Monday
    } else if (i > 4) {
        html = html.italics(); // weekends
    } 
    
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
}

