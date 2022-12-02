# study_JS

Assignment
MANDATORY TASK: 


1) Remove the showTypeof function and function call 

2) Add to the appData object the budget property, which will take the value of money

3) Add to the appData object the budgetDay, budgetMonth and expensesMonth properties, originally set to zero

4) Functions getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - make methods of the appData object

5) After that, fix the entire project, so that it works, namely
Wherever our functions have been called, correct the handling of the object, for example
let expensesMonth = appData.getExpensesMonth(); 

 Don't move on to the next items until you've done the previous ones.

 The program should work at this point.


6) Immediately after the object, call appData.asking();

7) Move the loop from the getExpensesMonth method to the asking method, and rewrite the loop so that the result is written to the appData.expenses object
object in the format:

expenses: {
    "answer to the first question" : "answer to the second question",
    "answer to the first question" : "answer to the second question"
}

The temporary conditions we wrote
if (i === 0) {
    expenses1 = prompt('Enter a mandatory expense item?', 'Quartet');
} else {
    expenses2 = prompt('Enter the required expense item?', 'Gasoline');
}
no longer needed, the question is asked each cycle


Pay attention If you answer "Please enter a required expense item?" the same way 2 times, the property values will simply be overwritten, so you should always answer differently to check. (a very common mistake).
Make sure the data type of the property value is a number!

Example result:
expenses: {
    "Rent" : 5000,
    "Kindergarten" : 2000
}


8) Rewrite the getExpensesMonth method: use the loop to count the sum of all mandatory expenses and save the result to the expensesMonth property of our object
use the loop for in order to calculate the sum

9) rename getAccumulatedMonth to getBudget. This method will calculate the values of properties budgetMonth and budgetDay, to calculate the values use only the properties of the object (no external variables)

10) Fix the variables in the getTargetMonth and getStatusIncome methods, all the values we get from our appData object


11) Call all the necessary methods after the object, so that all the data are read correctly (the order is very important).

12) Output to the console: 

    - Expenses for the month.
    - During which period (in months) the target will be reached
    - Income level

Clean up everything else in the program, we have only two variables money and appData
And two functions start and probably isNumber


13) Using the for in loop for the object (appData), print to the console the message "Our program includes data: " (display all properties and values)


14) Check that everything works and there are no errors in the console







COMPLICATED TASK: 


You need to perform in a separate js file connected to a separate HTML page


1) Create an array week and record the days of the week as a string

- Display all the days of the week

- Each of them on a new line

- Weekends - in italics.

- The current day - in bold (use a date object)

