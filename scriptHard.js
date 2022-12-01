'use strict';

let arr = ['12111113', '4555556', '675558', '4242', '000000002'];

let num = arr.map(str => {
        return parseInt(str);
    }); 
    
console.log(num);

arr.forEach((item) => {
    if (item.startsWith(2) || item.startsWith(4)) {
      console.log(item);
    }
});

next:
for(let i = 2; i < 101; i++) {
    for(let k = 2; k < i; k++) {
        if(i % k == 0) {
              
           continue next;
           
        }
       
    }
    console.log(`Делители этого числа: 1 и ${i}`);
}