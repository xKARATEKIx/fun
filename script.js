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
    period: 4,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    asking: () => {
        
        let itemIncome;
        do {
            itemIncome = prompt('Do you have extra income');
          } while(!itemIncome);
        
        do {
            itemIncome = prompt('Do you have extra income');
        }while(isNumber(itemIncome));
        
       
       
        let cashIncome;
        do {
            cashIncome = +prompt('How much do you earn');
        }while(!cashIncome);
        
        do {
            cashIncome = +prompt('How much do you earn');
        } while(!isNumber(cashIncome));
        
        appData.income[itemIncome] = cashIncome;

        let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas', 'home, car');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('Whether you have a deposit in the bank', true);
    
        for (let i = 0; i < 2; i++) {
            let expenseName;
            do {
                expenseName = prompt('Enter a mandatory expense item');
            }while(!expenseName);

            do {
                expenseName = prompt('Enter a mandatory expense item');
            }while(isNumber(expenseName));

            let expensePrice;
            do {
                expensePrice = +prompt('How much does it cost?');
            }while(!expensePrice);

            do {
                expensePrice = +prompt('How much does it cost?');
            }while(!isNumber(expensePrice));

            

            appData.expenses[expenseName] = expensePrice; 
          }  
        console.log(appData.expenses);
    },
    getExpensesMonth: () => {
        for(let key in appData.expenses) {
         appData.expensesMonth = appData.expenses[key] + appData.expenses[key];
        }
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
    getInfoDeposit: () => {
        if(appData.deposit) {
            //validation percentDeposit
            do {
                appData.percentDeposit = prompt('What is the annual deposit');
            }while(!appData.percentDeposit);

            do {
                appData.percentDeposit = prompt('What is the annual deposit');
            }while(!isNumber(appData.percentDeposit));

            //validation moneyDeposit
            do {
                appData.moneyDeposit = prompt('How much is budgeted');
            }while(!appData.moneyDeposit);

            do {
                appData.moneyDeposit = prompt('How much is budgeted');
            }while(!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: () => {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getBudgetDay();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log(`Expenses for month: ${appData.expensesMonth}`);
console.log(`Период равен ${Math.floor(appData.period)} месяцев. И цель заработать ${appData.mission} долларов`);
console.log(`The goal will be achieved per ${appData.period} month`);
console.log(`Budget Day: ${Math.floor(appData.budgetDay)}`);
console.log(`Budget Month: ${appData.budgetMonth}`);

for(let key in appData) {
    console.log(`Our project involve ${key} for value ${appData[key]}`);
}





