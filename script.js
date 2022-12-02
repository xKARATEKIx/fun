'use strict';

let isNumber = (n) => {
   return !isNaN(parseFloat(n));                                                                        
};
let money = prompt('What is your monthly income?', 7000);

let start = () => {
    

    do {
        money 
    } while(isNaN(parseFloat(money)) || money === " ", money === null);
};
start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    mission: 20000,
    period: 0,
    deposit: false,
    asking: () => {
        let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas', 'home, car');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('Whether you have a deposit in the bank', true);
    
        for (let i = 0; i < 2; i++) {
            let expenseName = prompt('Enter a mandatory expense item');
            let expensePrice = +prompt('How much does it cost?', 1000);
            appData.expenses[expenseName] = expensePrice; 
          }  
        console.log(appData.expenses);
    },
    getExpensesMonth: () => {
        for(let key in appData.expenses) {
         appData.expensesMonth = appData.expenses[key] + appData.expenses[key];
        }
        // for(let key in appData.expenses) {
        //     console.log(`key: ${key}, props: ${appData.expenses[key]}`);
        //  }
        console.log( appData.expensesMonth);
    },

    getBudget: () => {
        appData.budgetMonth = money - appData.expensesMonth;
        console.log( appData.budgetMonth);
    },

    getTargetMonth: () => {

        if(appData.budgetMonth < 0) {
            console.log('The goal will not be achieved');
        }
        appData.period = appData.mission / appData.budgetMonth;
        console.log(appData.period);
    },

    getBudgetDay: () => {
        appData.budgetDay = appData.budgetMonth / 30;
        console.log( appData.budgetDay);
    },

    getStatusIncome: () => {
        if(appData.budgetDay > 300) {
            console.log('You have a high level of income');
        } else if(appData.budgetDay < 300 && appData.budgetDay > 150) {
            console.log('You have a average level of income');
        } else if(appData.budgetDay > 150 && appData.budgetDay < 75) {
            console.log('You have a low level of income');
        } else if (appData.budgetDay < 0) {
            console.log('You need to think about your work');
        }
    },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getBudgetDay();
appData.getStatusIncome();


// let expensesAmuont = appData.getExpensesMonth();
// let accumulatedMonth = appData.getBudget();

console.log(`Expenses for month: ${appData.expensesMonth}`);
console.log(`Период равен ${appData.period} месяцев. И цель заработать ${appData.mission} долларов`);
console.log(`The goal will be achieved per ${appData.period} month`);
console.log(`Budget Day: ${Math.floor(appData.budgetDay)}`);
console.log(`Budget Month: ${appData.budgetMonth}`);





