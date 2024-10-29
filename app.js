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
function printBookInfo(title, author, year = 'year unknown') {
    console.log(`${title} by ${author}, ${year}`);
}

// Call the function with different arguments
printBookInfo('Algorithms', 'Robert Sedgewick', 2011); // Output: "Algorithms by Robert Sedgewick, 2011"
printBookInfo('Crafting Interpreters', 'Robert Nystrom'); // Output: "Crafting Interpreters by Robert Nystrom, year unknown"




