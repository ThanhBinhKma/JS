const restaurant = {
	name: "Classico Italiano",
	location: "Via Angle Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
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
			open: 10,
			close: 24,
		},
	},
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} - ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
};

restaurant.orderDelivery({
	time: "22:30",
	address: "Voa del sole,12",
	mainIndex: 2,
	starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Mutating variables
let a = 1111;
let b = 9999;
const obj = { a: 23, b: 13, c: 11 };

// ({ a, b } = obj);

console.log(a, b);
// Nested object
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
