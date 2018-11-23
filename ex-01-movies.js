/** 
* Write a function that, given a list of movie objects, will return an array with 
* sub-arrays containing directors name, title and year.
**/

// ++ Write YOUR CODE Below

function getDirectorNames(array){
	var subArray = [];
	var directorsList = [];

	for (var i = 0; i < array.length; i++){

		if ( array[i].year > 1979){

			subArray.push(array[i].director);
			subArray.push(array[i].title);
			subArray.push(array[i].year);
			// console.log(subArray);
		    directorsList.push(subArray);
		    subArray = [];
		}	
	}  
	// console.log(directorsList);
	return directorsList;
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var theBestMovies = [
   {director: 'stanley kubrick',title: 'the shining', year:1980},
   {director: 'francis ford coppola', title: 'apocalypse now', year: 1979},
   {director: 'steve barron', title: 'teenage mutant ninja turtles', year: 1990},
   {director: 'george lucas', title: 'star wars', year: 1979},
]

var directorsList = getDirectorNames(theBestMovies)


/*-------------------TEST-1-------------------------*/

console.log("==== ex-01-movies : TEST 1 ====");

console.assert(directorsList.length === 2);
console.assert(directorsList[0].length === 3);
console.assert(directorsList[1].length === 3);
console.assert(directorsList[0][0] === 'stanley kubrick');
console.assert(directorsList[0][1] === 'the shining');
console.assert(directorsList[0][2] === 1980);
console.assert(directorsList[1][0] === 'steve barron');
console.assert(directorsList[1][1] === 'teenage mutant ninja turtles');
console.assert(directorsList[1][2] === 1990);

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');

