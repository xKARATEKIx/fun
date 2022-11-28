'use strict';

let lang = confirm('English press "OK", Russian press "Cancel"');
const dayArrayRu = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 
const dayArrayEn = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; 
const dayArraySum = [['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'], ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']];

if(lang === true) {
    console.log(dayArrayEn);
} else {
    console.log(dayArrayRu);
}

switch(lang) {
    case true:
        console.log(dayArrayEn);
        break
    case false:
        console.log(dayArrayRu);
        break
}

lang === true ? console.log(dayArraySum[1]) : console.log(dayArraySum[0]);

let namePerson = ["Артем", "Максим"];
let resArt = namePerson[0] = "Артем" ? "директор" : "студент";
let resMax = namePerson[1] = "Максим" ? "преподаватель" : "студент";
console.log(resArt, resMax);
