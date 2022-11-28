'use strict';

let money = +prompt('What is your monthly income', 7000);
let income = 'freelance';
let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas', 'Internet, Taxi, Utility');;
let deposit = confirm('Whether you have a deposit in the bank', true);
let expenses1 = prompt('Enter a mandatory expense item', 'Internet-1, Taxi-1, Utility-1');
let expenses2 = prompt('Enter a mandatory expense item', 'Internet-2, Taxi-2, Utility-2');
let amount1 = +prompt('How much does it cost?', 1800);
let amount2 = +prompt('How much does it cost?', 200);
let mission = 20000;
let period = 12;
// let budgetMonth = money - (amount1 + amount2);
// let budgetDay = budgetMonth / 30;


let getExpensesMonth = (amount1, amount2) => {
    return amount1 + amount2;
};
console.log(getExpensesMonth(amount1, amount2));

let getAccumulatedMonth = (money, amount1, amount2) => {
    return money - (amount1 + amount2);
};
console.log(getAccumulatedMonth(money, amount1, amount2));

let accumulatedMonth = () => {
    return getAccumulatedMonth(money, amount1, amount2);
};
console.log(accumulatedMonth());

let budgetDay = () => {
    return accumulatedMonth() / 30;
};
console.log(budgetDay());

let getTargetMonth = () => {
    return mission / accumulatedMonth();
};
console.log(getTargetMonth());

let getStatusIncome = () => {
    if(budgetDay > 300) {
        console.log('You have a high level of income');
    } else if(budgetDay() < 300 || budgetDay() > 150) {
        console.log('You have a average level of income');
    } else if(budgetDay() > 150 || budgetDay() < 75) {
        console.log('You have a low level of income');
    }
};
getStatusIncome();

console.log(money, income, deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. И цель заработать ${mission} долларов`);
console.log(`The goal will be achieved per ${getTargetMonth()} month`);
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log(`Budget Day: ${Math.floor(budgetDay())}`);
console.log(`Budget Month: ${accumulatedMonth()}`);


