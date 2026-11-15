// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const truckName = "Ninja Nachos";   // string (text)
const truckYears = 3;              // number
const truckIsOpen = true;          // boolean (true or false)

// Log variables
console.log(truckName, truckYears, truckIsOpen);
console.log(typeof truckName);     // typeof tells you the type

// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
// TODO: console.log them, and log the typeof each one.


// ---------- Step 2: An array (a list) ----------
// Example:
const truckMenu = ["taco", "burrito", "nachos"];
console.log(truckMenu[0]);         // first item: index 0
console.log(truckMenu.length);     // how many items

// TODO: Make an array of 3 or more things YOUR truck sells.
// TODO: Log the first item, the last item, and how many items there are.


// ---------- Step 3: An object (one thing with details) ----------
// Example:
const truckItem = { name: "taco", price: 5, spicy: true };
truckItem.price = 5;                 // change a property
console.log(truckItem.name);       // dot notation
console.log(truckItem["price"]);   // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
// TODO: Log one property with dot notation and one with bracket notation.


// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2));          // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.


// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
