let money = 3500;
let income = 'freelance';
let addExpenses = 'Internet, Taxi, Utility';
let deposit = true;
let mission = 20000;
let period = 12;
let budgetDay = money / 30

console.log(money, income, deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. И цель заработать ${mission} долларов`);
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log(budgetDay);