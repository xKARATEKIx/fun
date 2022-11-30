'use strict';

let isNumber = (n) => {
   return !isNaN(parseFloat(n));                                                                        
};

let   money,
      income = 'freelance',
      addExpenses = prompt('List the possible expenses for the calculated period, separated by commas', 'Internet, Taxi, Utility'),
      deposit = confirm('Whether you have a deposit in the bank', true),
      expenses = [],
      mission = 20000,
      period = 12;

let start = () => {
    money = prompt('What is your monthly income');

    while(isNaN(parseFloat(money))) {
        money = prompt('What is your monthly income');
    }
};
start();

let getExpensesMonth = () => {
    
    let sum = 0;        

    for( let i = 0; i < 2; i++) {
        sum += +prompt('How much does it cost?', 1000);
        
        expenses[i] = prompt('Enter a mandatory expense item', 'Internet-1, Taxi-1, Utility-1');
        
    }
    console.log(sum);
   
    return sum;
};

let expensesAmuont = getExpensesMonth();

let getAccumulatedMonth = () => {
    return money - expensesAmuont;
};

let accumulatedMonth = getAccumulatedMonth();

let budgetDay = () => {
    return accumulatedMonth / 30;
};
console.log(budgetDay());

let getTargetMonth = () => {

    if(accumulatedMonth < 0) {
        console.log('The goal will not be achieved');
    }
    return mission / accumulatedMonth;
};
console.log(getTargetMonth());

console.log(money, income, deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. И цель заработать ${mission} долларов`);
console.log(`The goal will be achieved per ${getTargetMonth()} month`);
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log(`Budget Day: ${Math.floor(budgetDay())}`);
console.log(`Budget Month: ${accumulatedMonth}`);

let getStatusIncome = () => {
    if(budgetDay > 300) {
        console.log('You have a high level of income');
    } else if(budgetDay() < 300 && budgetDay() > 150) {
        console.log('You have a average level of income');
    } else if(budgetDay() > 150 && budgetDay() < 75) {
        console.log('You have a low level of income');
    } else if (budgetDay() < 0) {
        console.log('You need to think about your work');
    }
};
getStatusIncome();


