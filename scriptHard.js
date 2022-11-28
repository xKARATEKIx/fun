'use strict';

let foo = (stringi, maxLength = 30) => {
    if (typeof stringi !== 'string' ) {
        console.log('its not string');
        return stringi;
    }  else if(typeof stringi === 'string' || stringi.length < maxLength) {
        stringi = stringi.slice(0, maxLength);
        stringi += '...';
        return console.log(stringi.trim());
       
    } 
   
};
foo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd       ');
