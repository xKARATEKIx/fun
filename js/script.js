'use strict';

const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
const incomeAdd = document.querySelector('.income_add');
const plusExpenses = document.querySelector('.expenses_add');
const depositCheck = document.querySelector("#deposit-check");
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeItems = document.querySelectorAll('.income-items');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const expensesItems = document.querySelectorAll('.expenses-items');
const periodAmount = document.querySelector('.period-amount');


let isNumber = (n) => {
    return !isNaN(parseFloat(n));
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 1,
    start: () => {
        appData.budget = +salaryAmount.value;

        if(salaryAmount.value === '') {
            alert('Please enter a number!');
        } 
        

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.getBudgetDay();
        appData.getTargetMonth();
        appData.getPeriodValue();
        appData.calcPeriod();
        
        appData.showResult();
    },

    showResult: () => {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        incomePeriodValue.value = appData.period;
    },

    addExpensesBlock: () => {
        let expensesItems = document.querySelectorAll('.expenses-items');
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);

        if (expensesItems.length === 2) {
            plusExpenses.style.display = 'none';
        }
    },

    getExpenses: () => {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    
    getIncome: () => {
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },

    addIncomeBlock: () => {
        let incomeItems = document.querySelectorAll('.income-items');
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);

        if (incomeItems.length === 2) {
            incomeAdd.style.display = 'none';
        }
    },

    getAddExpenses: () => {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: () => {
        additionalIncomeItem.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getPeriodValue: () => {
        let periodSelectValue = periodSelect.value;
        periodAmount.innerHTML = +periodSelectValue;
        appData.period = periodSelectValue;
    },

    asking: () => {

        let itemIncome;
        do {
            itemIncome = prompt('Do you have extra income');
        } while (isNumber(itemIncome) || !itemIncome);

        let cashIncome;
        do {
            cashIncome = +prompt('How much do you earn');
        } while (!isNumber(cashIncome) || !cashIncome);

        appData.income[itemIncome] = cashIncome;

        let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas');
        let addExpensesArr = addExpenses.split(', ');
        for (let i = 0; i < addExpensesArr.length; i++) {
            addExpensesArr[i] = addExpensesArr[i].charAt(0).toUpperCase() + addExpensesArr[i].slice(1);
        }
        let addExpensesString = addExpensesArr.join(",");
        appData.addExpenses = addExpensesString;


        appData.deposit = confirm('Whether you have a deposit in the bank', true);


    },

    getExpensesMonth: () => {
        for (let key in appData.expenses) {
            appData.expensesMonth = appData.expenses[key];
        }
    },

    getBudget: () => {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    },

    getTargetMonth: () => {
        return targetAmount.value / appData.budgetMonth;
    },

    getBudgetDay: () => {
        appData.budgetDay = appData.budgetMonth / 30;
    },

    getStatusIncome: () => {
        if (appData.budgetDay > 300) {
            console.log('You have a high level of income');
        } else if (appData.budgetDay < 300 && appData.budgetDay > 150) {
            console.log('You have a average level of income');
        } else if (appData.budgetDay > 150 && appData.budgetDay < 75) {
            console.log('You have a low level of income');
        } else if (appData.budgetDay < 0) {
            console.log('You need to think about your work');
        }
    },

    getInfoDeposit: () => {
        if (appData.deposit) {
            //validation percentDeposit  
            do {
                appData.percentDeposit = prompt('What is the annual deposit');
            } while (!isNumber(appData.percentDeposit) || !appData.percentDeposit);

            //validation moneyDeposit
            do {
                appData.moneyDeposit = prompt('How much is budgeted');
            } while (!isNumber(appData.moneyDeposit) || !appData.moneyDeposit);
        }
    },

    calcPeriod: () => {
        return appData.budgetMonth * periodSelect.value;
    }
};

start.addEventListener('click', appData.start);
plusExpenses.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodValue);
