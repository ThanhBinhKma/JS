const arr = [1, 2, 3];

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angle Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
};
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];

// const [i, ,j] = nested

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
