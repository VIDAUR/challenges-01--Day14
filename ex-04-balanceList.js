/**
* A company is interested in manipulating three data about its customers,
* for that they have decided to use objects that will be added in a list. 
* The development team has defined the following requirements:

* - It is required to create a balances list, each balance is an object.
* - The object has three properties: 'name' (customer name), 'month' (month) 
*   and 'balance' (amount of the month's balance).

* - It is possible to get the number of balances (objects) that list contains.
* - It is possible to get the total balance of the list.
* - It is possible to add balances (objects) in list.
* - It is possible to get the current balance.
* - It is possible to go forward between balances (objects), when it reaches 
    the end, the list starts in the first balance (object).
* - It is possible to get an object with the total of months and balances. 
**/


// ++ Write YOUR CODE Below




// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var newList1 = {"name": "maga", "month": "July", "balance": 400}
var newList2 = {"name": "magy", "month": "August", "balance": 500}
var newList3 = {"name": "rodo", "month": "June", "balance": 100}


/*-------------------TEST-1-------------------------*/
/*				add new balances                    */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 1 ====");

var addBalanceResultFirst = addBalance(newList1);
var addBalanceResultSecond = addBalance(newList2);

console.assert(addBalanceResultSecond.length === 3);
console.assert(addBalanceResultSecond[1].month === 'July');
console.assert(addBalanceResultSecond[2].name === 'magy');

/*-------------------TEST-2-------------------------*/
/*	        number of balances in list              */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 2 ====");

var addBalanceResultThird = addBalance(newList3);

console.assert(numberOfBalances() === 4);

/*-------------------TEST-3-------------------------*/
/*	           show current balance                 */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 3 ====");

var currentBalanceResult = currentBalance();

console.assert(currentBalanceResult.name === "julio");


/*-------------------TEST-4-------------------------*/
/*	           show current balance                 */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 4 ====");

var currentBalanceResult = currentBalance();

console.assert(currentBalanceResult.name === "julio");


/*-------------------TEST-5-------------------------*/
/*	           show current balance                 */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 5 ====");


console.assert(currentBalance().name === "julio");


/*-------------------TEST-6-------------------------*/
/*	           next balance of list                 */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 6 ====");

console.assert(nextBalance().name === "maga");
console.assert(nextBalance().name === "magy");
console.assert(nextBalance().name === "rodo");
console.assert(nextBalance().name === "julio");

/*-------------------TEST-7-------------------------*/
/*	              sum of balances                   */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 7 ====");

console.assert(sumBalances() === 1300);

/*-------------------TEST-8-------------------------*/
/*	 return months and balances in new object       */
/*--------------------------------------------------*/

console.log("==== ex-04-balanceList : TEST 8 ====");

console.assert(getMonths().months.length === 4);
console.assert(getMonths().balances.length === 4);
console.assert(getMonths().months[2] === "August");
console.assert(getMonths().balances[3] === 100);


/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
