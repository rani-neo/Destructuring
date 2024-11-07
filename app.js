'use strict';
//Destructuring Arrays 1.1. Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
//1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;

// 1.3 
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// 
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);
// 1.4 Below is the ratingStars array.Destructure it into three variables called fiveStarsRatings, oneStarratings and threeStarsratings. Assign the threeStarsrating variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRating, oneStarratings, threeStarsrating = 0] = ratingStars;
// console.log(fiveStarRating); // Outputs: 63405
// console.log(oneStarratings); // Outputs: 1808
// console.log(threeStarsrating); // Outputs: 0
// Destructuring Objects﻿
// 2.1﻿
// Destructure the first book object from the books array into variables called title, author and ISBN.
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN)
// 2.2﻿
// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// const { keywords: tagsList } = books[0];
// console.log(tagsList);
// 2.3﻿
// // // // The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);
// 2.4﻿
// // Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// const { title, author } = books[0]; // Destructure into temporary variables
// bookTitle = title; // Reassign to existing variable
// bookAuthor = author;
// console.log(bookTitle, bookAuthor);
// 2.5﻿
// Each book object has a deeply nested rating property as illustrated below:
// 
// {
  // title: 'Algorithms',
  // ...
  // thirdParty: {
    // goodreads: {
      // rating: 4.41,              // <-- HERE
      // ratingsCount: 1733,
      // reviewsCount: 63,
      // fiveStarRatingCount: 976,
      // oneStarRatingCount: 13
    // }
  // }
// },
// // // Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
// 
// // Please do most of the work on the left side of the assignment operator: const ... = books[0];
// const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
// console.log(bookRating); 
// 2.6﻿
// // // // Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
// 
// // If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
// Correct function definition
// function printBookInfo(title, author, year = 'year unknown') {
    // console.log(`${title} by ${author}, ${year}`);
// }
// 
//Call the function with different arguments
// // printBookInfo('Algorithms', 'Robert Sedgewick', 2011); // Output: "Algorithms by Robert Sedgewick, 2011"
// // printBookInfo('Crafting Interpreters', 'Robert Nystrom'); // Output: "Crafting Interpreters by Robert Nystrom, year unknown"
// The Spread Operator﻿
// 3.1﻿
// // // Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
// 
 // Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

//  const bookAuthors = [...books[0].author, ...books[1].author];
//  console.log(bookAuthors);
// 3.2﻿
// // Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
// spellWord('JavaScript')
// function spellWord(word) {
  // console.log(word);
// }
// Rest Pattern and Parameters﻿
// 4.1﻿
// // // // Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, ...rest);
// 4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);         // Output: 'The MIT Press'
// console.log(restOfTheBook);
// 4.3﻿
// // // // Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
// function printBookAuthorsCount(title, ...authors) {
  // console.log(`The book "${title}" has ${authors.length} authors"`)
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'); 
// Short Circuiting (&& and ||)﻿
// 5.1﻿
// // Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
// 
// {
  // title: 'Algorithms',
  // author: ['Robert Sedgewick', 'Kevin Wayne'],
  // ...
// programmingLanguage: 'Java',     // <-- HERE
// }
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.
// function hasExamplesInJava(book) {
   //Use short-circuiting to check the programmingLanguage property
    // return book.programmingLanguage === 'Java' || 'no data available';
// }
// console.log(hasExamplesInJava(books[0])); // Output: true
// console.log(hasExamplesInJava(books[1])); // Output: 'no data available'
// console.log(hasExamplesInJava(books[2])); // Output: 'no data available'
// console.log(hasExamplesInJava(books[3])); // Output: 'no data available'
// 5.2﻿
// // // // Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
// 
// {
  // title: 'Operating System Concepts',
 // ... removed for clarity
  // onlineContent: false,          // <-- HERE
// },
// Loop over the books array
// for (const book of books) {
    //Use short-circuiting to check for onlineContent
    // book.onlineContent && console.log(`${book.title} provides online content.`);
// }
// 6.1﻿
// // // There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
// 
// show example solution
//  {...}
// for (let i = 0; i < books.length; i++) {
  // // books[i].onlineContent ?? console.log(`"${books[i].title} provides no data about its online content"`);
// }
// Logical Assignments Operators﻿
// 7.1﻿
// // // Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// Use nullish assignment to set edition to 1 if it's missing
// books.forEach(book => {
  // book.edition ??= 1;
// });
// console.log(books);
// 7.2﻿
// // // Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// 
// Use the &&= operator (tip: you may also need the ! operator)
// books.forEach(book => {
  // If the rating is less than 4.2, set highlighted to false
 // book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
// });
// 
// console.log(books);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge 
we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's 
name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new 
array ('players1Final') containing all the original team1 players plus 'Thiago', 
'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 
'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names 
(NOT an array) and prints each of them to the console, along with the number of goals 
that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is 
more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call 
the function again with players from game.scored

// GOOD LUCK 😀*/ 
//1. Create one player array for each team (variables 'players1' and 'players2')
//const [players1, players2] = game.players;
//console.log(players1, players2);
//2. The first player in any player array is the goalkeeper and the others are field 
//players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's 
// const [gk, ...fieldplayer] = players1;
// console.log(gk, fieldplayer);
//3. Create an array 'allPlayers' containing all players of both teams (22 players)
//  const allPlayers = [...players1, ...players2];
//  console.log(allPlayers);
//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new
//array ('players1Final') containing all the original team1 players plus 'Thiago', 
//'Coutinho' and 'Perisic'
//  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisis'];
//  console.log(players1Final);
//  5. Based on the game.odds object, create one variable for each odd (called 'team1', 
//'draw' and 'team2')

//  const {
    // odds: { team1, draw, team2 }, // Changed x to draw
  //  } = game;
  //  console.log(team1, draw, team2); // Should now correctly log 1.33 3.25 6.5
//6. Write a function ('printGoals') that receives an arbitrary number of player names 
//(NOT an array) and prints each of them to the console, along with the number of goals
//that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
  // console.log(players);
  // console.log(`${players.length} goals were scored`);
  //
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Custom player names
// printGoals(...game.scored); // Call with players who scored in the game
//7.The team with the lower odd is more likely to win. Print to the console which teamis 
//more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
//Looping  Arrays: The for-of-Loop
//8.1 Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.(Has to understand again)
// let pageSum = 0;
// for (let book of books) {
  // pageSum += book.pages;
// }
// console.log(`Total pages: ${pageSum}`);
// 8.2﻿
// // Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// 
// // // // Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).
// 
// const allAuthors = [];
// for (const book of books) {
  // if (typeof books.author === 'string') {
    // allAuthors.push(book.author)
  // } else {
    // for (const author of book.author) {
      // allAuthors.push(author);
    // }
  // };
// }
// console.log(allAuthors);
// 8.3﻿
// // // Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
// for (const [index, author] of allAuthors.entries()) {
  // console.log(`${index + 1}. ${author}`);
// }
//Enhanced Object Literals﻿
// 9.1﻿
// // // // Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.
// 
// // Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.
// 
// const bookData = [
  // ['title', 'Computer Networking: A Top-Down Approach'],
  //  ['author', ['James F. Kurose', 'Keith W. Ross']],
  //  ['publisher', 'Addison Wesley'],
//  ];
// 
//Do the rest
// const newBook = {
  // [bookData[0][0]]: bookData[0][1],
  // [bookData[1][0]]: bookData[1][1],
  // [bookData[2][0]]: bookData[2][1]
// };
// console.log(newBook);
//9.2﻿
// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
// 
// const pages = 880;
// const newBook2 = {
  // title: 'The C Programming Language',
  // author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  // pages, // This adds the pages variable as a property }
  // console.log(newBook2);
  // Optional Chaining(?.)

// 10.1﻿
// // // // Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
// function getFirstKeyword(book) {
    //Use optional chaining to safely access the first keyword
    // return book.keywords?.[0]; // Returns the first keyword or undefined
// }
// 
//Example 1: Book with keywords
// const book1 = {
    // title: "Computer Science Basics",
    // author: "John Doe",
    // keywords: ["computer science", "programming", "software"]
// };
// console.log(getFirstKeyword(book1)); // Expected output: "computer science"
// // Get the keys from the thirdParty.goodreads of the first book
// 11.1﻿
// // // // Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
// 
// In the end, the entries array should be filled with arrays containing keys:
// 
// // [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['coneStartRatingCount']]

//const entries = [];
// object key
//for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    //entries.push([key]);
//}
// Now entries should be filled with the desired structure
//console.log(entries); 
// 11.2﻿
// // // The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.
// 
// // Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
// 
// // Push each value to the appropriate inner array in the entries array (use index from entries()).
// Initialize entries array
// let entries = [];
// 
// Use Object.entries() to get both keys and values
// for (const [key, value] of Object.entries(books[0].thirdParty.goodreads)) {
    //  entries.push([key, value]); // Push key and value as an array
//  }

// Log the entries array to see the result

// 11.3﻿
// // Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries);
// console.log(entries2);
///// ///
// coding challange #2
// Let's continue with our football betting app!
// 
// 1. Loop over the game.scored array and print each player name to the console, along with 
// the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied 
// how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      // Odd of victory Bayern Munich: 1.33
      // Odd of draw: 3.25
      // Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for 
// "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// 
// BONUS: Create an object called 'scorers' which contains the names of the players who 
// scored as properties, and the number of goals as the value. In this game, it will look 
// like this:
      // {
        // Gnarby: 1,
        // Hummels: 1,
        // Lewandowski: 2
      // }
//
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name 
// to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, player] of game.scored.entries())
  // console.log(`Goal ${i + 1}: ${player}`);
//2. Use a loop to calculate the average odd and log it to the console (We already studied 
//how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds)
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// 3. Print the 3 odds to the console, but in a nice formatted 
// way, exaclty like this:
     // Odd of victory Bayern Munich: 1.33
      //Odd of draw: 3.25
      //Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't 
// hardcode them (except for 
//"draw"). HINT: Note how the odds and the game objects have the 
// same property names 😉
// for (const [team, odd] of Object.entries(game.odds)) {
    // //  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    // console.log(`Odd of ${teamStr}: ${odd}`);
//}
