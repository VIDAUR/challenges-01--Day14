/** 
* Write a function that, given a list of movie objects, will return an array with 
* sub-arrays containing directors name, title and year.
**/

// ++ Write YOUR CODE Below





// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var data = [[['firstName', 'Oscar'], ['lastName', 'Majik'], ['age', 56], ['country', 'Mexico']]];
var data2 = [[['firstName', 'Oscar'], ['lastName', 'Majik'], ['age', 56], ['country', 'Mexico']],
        [['firstName', 'Pamel'], ['lastName', 'Herkan'], ['age', 26], ['country', 'Polonia']]
       ];
var data3 = [[['firstName', 'Oscar'], ['lastName', 'Majik'], ['age', 56]],
        [['firstName', 'Pamel'], ['lastName', 'Herkan'], ['age', 26], ['country', 'Polonia']]
       ];

/*-------------------TEST-1-------------------------*/

console.log("==== ex-03-nestedList : TEST 1 ====");       

console.assert(nestedListToObj(data).length === 1);
console.assert(Object.values(nestedListToObj(data)[0]).length === 4);
console.assert(Object.values(nestedListToObj(data)[0])[3] === 'Mexico');


/*-------------------TEST-2-------------------------*/

console.log("==== ex-03-nestedList : TEST 2 ===="); 


console.assert(nestedListToObj(data2).length === 2);
console.assert(Object.values(nestedListToObj(data2)[1]).length === 4);
console.assert(Object.values(nestedListToObj(data2)[1])[0] === 'Pamel');

/*-------------------TEST-3-------------------------*/

console.log("==== ex-03-nestedList : TEST 3 ===="); 

console.assert(nestedListToObj(data3).length === 2);
console.assert(Object.values(nestedListToObj(data3)[0]).length === 3);
console.assert(Object.values(nestedListToObj(data3)[0])[2] === 56);
console.assert(Object.values(nestedListToObj(data3)[1]).length === 4);
console.assert(Object.values(nestedListToObj(data3)[1])[3] === 'Polonia');

/*-------------------TEST--4-------------------------*/

console.log("==== ex-03-nestedList : TEST 4 ===="); 

console.assert(nestedListToObj().length === 0);

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');