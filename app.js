//Destructuring array 1.1 Destructure the books array into two variable called firstbook and secondBook
const [firstBook, secondBook] = books;
//1.2 Destructure the book array into variable called thirdBook.You must skip the first two books.
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