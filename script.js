'use strict';

const adv = document.querySelector('.adv');
const book = document.querySelectorAll('.book');



book[0].before(book[1]);
book[4].after(book[3]);
book[5].before(book[2]);
book[5].after(book[2]);
document.body.style.backgroundImage ='url(./image/you-dont-know-js.jpg)';

const list = document.querySelectorAll('li');
const create = document.createElement('li');
create.innerHTML = "Глава 8: За пределами ES6";
list[16].before(list[8]);
list[13].before(list[14]);
list[9].after(list[12]);
list[12].after(list[14]);

list[37].after(list[45]);
list[40].after(list[38]);
list[43].after(list[41]);
list[56].before(create);
console.log(list);

adv.remove();