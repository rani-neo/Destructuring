'use strict';
//Enhanced object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]:{
         open: 12,
         close: 22,
    },
     [weekdays[4]]: {
         open: 11,
        close: 23,
    },
     
     [weekdays[5]]: {
         open: 0, // Open 24 hours
        close: 24,
     },
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enhanced object literals
 openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
if (restaurant.openingHours && restaurant.openingHours)
    //console.log(restaurant.hours.mon.open);
// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}
// methods 
console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exits');
// Array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
//const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/*#Challenge 1
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

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

/*
///////////
 // Logical operator 
const rest1 = {
    name: 'Capri',
    //numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
// OR assignment operator 
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; 
rest2.numGuests ??= 10;
// And assignment operator 
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);
/* 
///////////////////
The Nullish Coalescing Operator
const restaurant = {
    name: 'Classico Italiano',
    location: 'Firenze',
    categories: ['Italian', 'Pizzeria'],
    numGuests: 0 
   // Default is 0
};
const orderPizza = function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);          // Should log 'mushrooms'
        console.log(otherIngredients);        // Should log ['spinach']
}
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// nullish operator null and undefined (Not 0 0r " ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


/*
// Use Any data type, return Any data type,
//short-circuiting 
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// short circuiting (&& and ||)
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//  Rest patterns
//Destructuring object
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // open 24 hours
            close: 24,
             
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Spread, because on Right side of =
const arr = [1, 2, ...[3, 4]];
// Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,];
console.log(pizza, risotto, otherFood);
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum +=
        numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7]
add(...x);
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const NewArr = [1, 2, ...arr];
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Iterables: arrays, string, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, '', 'S,'];
console.log(letters);
console.log(...str);
// console.log (`${...str} Schmedtmann`); this will throw error because the spread operator (...) cannot be used inside a template literal directly in this way:
//Real world example
const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"), 
//   prompt("Let's make pasta! Ingredient 2?"), 
//   prompt("Let's make pasta! Ingredient 3?"),
 ];
console.log(ingredients);


// Pass the ingredients individually
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// ES6 spread operator to pass all ingredients at once
restaurant.orderPasta(...ingredients);
//Objects
const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Guiseppi' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


////////////////
 /*
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,

})
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: ' Via del Sole, 21',
    starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri: { open, close: c } } = openingHours;
console.log(open, c);
    };
*/