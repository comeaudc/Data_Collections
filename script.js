// Data collections
// Arrays - indexed list

//Defining an array
// 1. declare array/variable name
// 2. equal sign
// 3. square brackets
// 4. values must be separated by a comma

// Create an array consisting of three of your favorite movies (strings) and assign it to a variable named movies.
let movies = [`Spirited Away`, `Terrifier`, `Queens`];

// The .length property tells us the number of elements in the array, and can be used to facilitate things like for loops.

// Printing elements from array
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i])
// }

// for(let el of movies){
//     console.log(el)
// }

//.length-1 will ALWAYS give us the last index/element in the array

//Defining elements by index number
movies[2] = 'Iron Giant';
//Add element to the end of any array
movies[movies.length] = 'Queens';

//Manipulating the Array length with the length property.
// movies.length = 50
// console.log(movies);
// movies.length = 4
// console.log(typeof movies);

// Array Methods

//Concat
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

//when using methods we first declare the array to use it on
// Methods(functions) must be invoked (ran) by putting parenthases at the end
// let ourMovies = yourMovies.concat(myMovies, movies);
// adding myMovies to yourMovies and saving into a new variable

// console.log(ourMovies);

//.join() turns array into string and inserts character(s) between elements
// ourMovies = ourMovies.join(`, `)

// console.log(ourMovies)

//.push() .pop() - manipulate the end of an array
// .push() - add an element to the end
// console.log(movies)
movies.push('MoneyBall', 'Nightmare Before Christmas');
// console.log(movies)

// .pop() - remove and element from the end
movies.pop();
// console.log(movies)

// .shift() .unshift() - manipulate the begining of our array
// .unshift() - add element to beginning of array
// console.log(movies)
movies.unshift(`Late night with the Devil`, `Pearl`);
// console.log(movies)

// .shift() -  remove element from beginning of array
movies.shift();
// console.log(movies)

// .splice() -  allows us to remove/add elements anywhere within the array
// takes a minimum or two or more arguments
// arguments: 1st - starting index, 2nd - delete count, any others are inserted data
// let removedArray = movies.splice(3, 0, 'Rush', 'Harry Potter')
// console.log(removedArray)

// .slice() - allow us to make a deep copy of a portion of the array
// takes two arguments: 1st - starting index number, 2nd - ending index number
// let newMovies = movies.slice(1, 4)

// console.log(newMovies)

// .at() - allows us access/to copy the element AT that index
let singleMovie = movies.at(-3); // negative index's sount from the last element. -1 - last element
// console.log(singleMovie)

// .reverse() - reverses the array - permenatly mutates array inplace
movies.reverse();

// .flat() - it flattens(removes) 1 dimension or more from a nested array
// let numArray = [
// 	[1, 2, 3], // 0
// 	[4, 5, 6], // 1
// 	[ //2
// 		[7, 8, 9], // 0
// 		[10, 11, 12], // 1
// 		[13, 14, 15] // 2
// 	],
// ];

// console.log(`2d array`, numArray[2][2][2])

// numArray = numArray.flat()

// console.log(numArray[numArray.length -1])

// .sort() - sorts the array based on default settings or custom sorting function
let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
movies = [
  'Shrek',
  'Caddyshack',
  'Batman',
  'Interstellar',
  'Scarface',
  'Spaceballs',
  'Alien',
  'The Count of Monte Cristo',
  `Shrek`,
];

numArray.sort(); // no argument means numerical sorting
// movies.sort()
console.log(numArray);
console.log(movies);

// .indexOf() .lastIndexOf() - give you the index number of a specific element

// console.log(movies.indexOf('Twilight'))
let num = movies.lastIndexOf(`Shrek`);

// console.log(movies[num])

// .forEach() - does certain logic FOR EACH element in the array. same as a loop
//also takes a callback function
// movies.forEach((el, index) => {console.log(index, el + ` is a good`)});

// Spread operator, spreads the LITERAL values of an array, allowing us to make deep copies
console.log(movies);
let copy = ['Cinderella', ...movies, 'Alien']; // used the spread operator to create a deep copy of the array
// console.log(copy)

//Objects - defined using curly brackets
let vehicle = {
  color: 'blue',
  hp: 4000,
  year: 1989,
  owners: [
    'dylan',
    'sam', // how could i access this? vehicle.oweners[1]
    'kathleen',
  ],
};

vehicle.color = 'Spicy Red'; //Changing object properties
vehicle.model = 'Honda'; // Adding new properties

delete vehicle.hp; // Deleting properties

console.log(vehicle);

vehicle = { name: 'Tuhmater' };

// Iterating through objects
// key will have value of key and vehicle[key]  will return value
// for (const key in vehicle) {
// 	console.log(vehicle[key]);
// }

//Contitionals with Objects
if (vehicle.name == 'Tuhmater') console.log(`Nice to meet you`);

if (!vehicle.hp) console.log(`I got no wheels baby`);
