'use strict';

// 1.1
//Destructure the book array into two variable called firstbook and second book;
const [firstBook, secondBook] = books;

    //.2 Destructure the book array into variable called thirdBook.You must skip the first two books.
const [, , thirdBook] = books;
//1.3 Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];


// Destructure the nested arrays into rating and ratingsCount
const [[, rating], [, ratingsCount]] = ratings;

console.log(rating);       // Output: 4.19
console.log(ratingsCount); // Output: 144584

//1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
const ratingStars = [63405, 1808];
const [fiveStarRatingCount, oneStarRating, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatingCount, oneStarRating, threeStarRatings); 
console.log(oneStarRating); 
console.log(threeStarRatings); 
//Destructuring Objects
//2.1
//Destructure the first book object from the books array into variables called title, author and ISB

const { tittle, author, ISBN } = books[0];
//2.2
//Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
const { keywords: tags } = books[0];
// 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programminglanguage = 'unknown' } = books[0];
//2.4
//Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and //author properties of the first book object from the books array.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0])


//2.5﻿
//Each book object has a deeply nested rating property as illustrated below:

//{
//title: 'Algorithms',
//...
//thirdParty: {
//  goodreads: {
//    rating: 4.41,              // <-- HERE
//    ratingsCount: 1733,
//    reviewsCount: 63,
//    fiveStarRatingCount: 976,
//    oneStarRatingCount: 13
//  }
//}
//
//structure the first book object from the books array into a variable called bookRating. In the result of //ur destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.//odreads.rating property.
//
//ease do most of the work on the left side of the assignment operator: const ... = books[0];
//
//ow example solution
//...}
const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
//2.6﻿
//Write a function called printBookInfo that has three parameters called title, author and year. This function //should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

//If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
