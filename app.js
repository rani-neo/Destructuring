'use strict';

// 1.1
//Destructure the book array into two variable called firstbook and second book;
//const [firstBook, secondBook] = books;

    //.2 Destructure the book array into variable called thirdBook.You must skip the first two books.
//const [, , thirdBook] = books;
//1.3 Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

//const ratings = [['rating', 4.19], ['ratingsCount', 144584]];


// Destructure the nested arrays into rating and ratingsCount
//const [[, rating], [, ratingsCount]] = ratings;

//console.log(rating);       // Output: 4.19
//console.log(ratingsCount); // Output: 144584

//1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
//const ratingStars = [63405, 1808];
//const [fiveStarRatingCount, oneStarRating, threeStarRatings = 0] = ratingStars;

//console.log(fiveStarRatingCount, oneStarRating, threeStarRatings); 
//console.log(oneStarRating); 
//console.log(threeStarRatings); 
//Destructuring Objects
//2.1
//Destructure the first book object from the books array into variables called title, author and ISB

//const { tittle, author, ISBN } = books[0];
//2.2
//Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
//const { keywords: tags } = books[0];
// 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

//const { language, programminglanguage = 'unknown' } = books[0];
//2.4
//Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and //author properties of the first book object from the books array.
//let bookTitle = 'unknown';
//let bookAuthor = 'unknown';
//({title: bookTitle, author: bookAuthor} = books[0])


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
//const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
//2.6﻿
//Write a function called printBookInfo that has three parameters called title, author and year. This function //should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

//If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

//function printBookInfo({ title, author, year = 'year unknown' }) {
  //console.log(`${title} by ${author}, ${year}`);
//}
//The spread Operator 
//3.1 Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

//Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

//const bookAuthor = [...books[0].author, ...books[1].author]

//3.2
//Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
//function spellWord(word) {
  //console.log(...word);
//}
//Rest patterns and Parameters 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
//const [mainKeyword, ...rest] = books[0].keywords;
//console.log(mainKeyword); // Output: computer science
//console.log(rest);        // Output: ['programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering']

//4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
//const { publisher: bookPublisher, ...restofTheBook } = books[1];
//console.log(bookPublisher);   // Output: Pearson
//console.log(restofTheBook);   // Output: Rest of the properties of the second book object
//4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

// function printBookAuthorsCount(title, ...authors) {
  // console.log(`The book ${title} has ${authors.length} authors`)
// }
// 
// // printBookAuthorsCount('Structure and Interpretation of Computer Programs', 'Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman');

//Short Circuiting (&& and ||) 5.1
//Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
// {
  // title: 'Algorithms';
    // author: ['Robert Sedgewick', 'Kevin Wayne'],
      // ...
  // prigrammingLanguage: 'Java',
// }
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.
// Function to check if the book has examples in Java
// function hasExamplesInJava(book) {
  // Using a ternary operator for clear return values
  // return book.programmingLanguage === 'Java' ||  'no data available';
// }
// 
 //Define example book objects
//  const book1 = {
  //  title: 'Algorithms',
  //  author: ['Robert Sedgewick', 'Kevin Wayne'],
  //  programmingLanguage: 'Java' // This book uses Java
//  };
//  
//  const book2 = {
  //  title: 'Computer Systems: A Programmer\'s Perspective',
  //  author: ['Randal E. Bryant', 'David R. O’Hallaron'],
  //  programmingLanguage: 'C' // This book uses C
//  };

// const book3 = {
  // title: 'Structure and Interpretation of Computer Programs',
  // author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman']
// }
  //This book has no programmingLanguage property };

//Call the function with defined book objects
//  console.log(hasExamplesInJava(book1));  // Output: true
//  console.log(hasExamplesInJava(book2));  // Output: no data available
  // console.log(hasExamplesInJava(book3));  // Output: no data available
//5.2 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
   // books.forEach(book => {
  // Using short-circuiting to check for online content
  //book.onlineContent && console.log(`${book.title} provides online content.`);
//});

// The Nullish Coalescing Operator(??) 6.1
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
// 
//for (let i = 0; i < books.length; i++) {
  //books[i].onlineContent ?? console.log(`"${books[i].title} provides no data about its //online content`)
//}
//Logical Assignments Operators﻿
//7.1﻿
//Some of the book objects from the books array are missing the edition property. Loop //over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
 for (let i = 0; i < books.length; i++) {
   books[i].edition ||= 1;
 }
 console.log(books);
// 7.2﻿
// // // Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// 
// Use the &&= operator (tip: you may also need the ! operator)
for (let i = 0; i < books.length; i++) {
  books[i].highlighted ??= true; 
  books[i].highlighted &&= !(books[i].thirdParty?.goodreads?.rating < 4.2);
}
console.log(books);


