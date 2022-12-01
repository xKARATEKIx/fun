'use strict';
let isNumber = (n) => {
    return !isNaN(parseFloat(n));                                                                        
 };

let amountTry = 3;

const quessFunc = () => {
    let num = 100;
   
    let user = confirm('Quess the number from 1 to 10');
    
    let enter = +prompt('Enter the hidden number');
    
    if(amountTry === 1) {
        alert('The attempts are over. Would you like to play again?');
        amountTry = 3;
        quessFunc();
    };

    if(!isNumber(enter)) {
        alert('Enter the number');
        quessFunc();
    };

    if(user === true) {
        
        enter
        
        if(enter < num) {
            amountTry--;
            alert(`The hidden number is more. Quantity of try is ${amountTry}`);
            quessFunc();
        } else if(enter > num) {
            amountTry--;
            alert(`The hidden number is less. Quantity of try is ${amountTry}`);
            quessFunc();
        } else if(enter === num) {
            let finish  = alert('You quess! Nice work! Would you like to play again?');
            finish;
            quessFunc();
        };
       
    } else {
        alert('Game Over');
        quessFunc();
    };
    
};
quessFunc();