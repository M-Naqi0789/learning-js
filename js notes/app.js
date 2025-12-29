// JS 

// 1. arrays = stores list of elements with a single name using numbered indexes. 
// for eg :
// const cars = ["Saab", "Volvo", "BMW"];
// properties : methods, length, loops, accessibility, search, sort, iterations, sets, destructuring, spread operators

// 2. boolean = values as true ir false, used in logical operations.
// for eg :
// const x = 5; if x === 8 
// properties : methods, camparison, loops, consditions 

// 3. classes = a type of function with keyword class, properties are given inside keyword constructor
// for eg : 
// class Car {  
//   constructor(brand) { 
//     this.carname = brand;  
//   }
// }
// mycar = new Car("Ford");  
// properties : methods, keywords, 

// 4. date = quite alot of methods to generate diff form of dates
// for eg :
// new Date();
// properties : methods

// 5. error = functions to handle error 
// for eg :
// const error = new Error();
// properties : methods

// 6. functions = reusable block of code 
// for eg :
// let hello = () => {
//   return "Hello World!";
// }
// properties : methods, default and rest parameters, expressions, arrow function, high order function  , callback

// 7. global = global object is actually the browser windows, it have windows methods 
// for eg :
// const hi = hello;
// hi.string();
// properties : methods

// 8. iterators = standard way to acess elements
// for eg :
// const myIterator = Iterator.from("123456789");
// let text = "";
// for (const x of myIterator) {
//   text += x;
// }
// properties : methods, loops, for of

// 9. map  = the collections of key-value pairs, similar to a dictionary
// for eg :
// const fruits = new Map();
// fruits.set("apples", 500);
// properties : methods

// 10. math  = mathematical tasks in js
// for eg :
// Math.floor(-4.2);
// properties : methods

// 12. objects  = a variable that can hold many variables, collections of key-value pairs.
// for eg :
// const car = {type:"Fiat", model:"500", color:"white"};
// properties : methods

// 13. operators  = to operate values
// for eg :
// x += y
// properties : assignments, arithmetic and their Precedence/order of operation, comparison, logical, Miscellaneous (signs of funtion, array, ternary operator and etc)

// 14. promises  = shows result of an asynchronous operation
// for eg :
// let myPromise = new Promise(function(myResolve, myReject) {
//   let result = true;
//   if (result == true) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });
// myPromise.then(x => myDisplay(x), x => myDisplay(x));
// properties : states, methods, Async/Await

// 15. proxy  =  wrap other objects, ets you control operations on them, can trap and intercept code  
// for eg :
// const proxy = new Proxy(target, handler);
// properties : targets (og function), handlers (traps methods using reflect)

// 16. variable scoping = where variables are accessible (Global, Function, or Block scope)
// for eg :
// { let blockScoped = "I stay here"; }
// properties: var (function-scoped), let/const (block-scoped).

// 17. closures = A function that remembers its lexical environment even after the outer function has finished executing. used for data privacy
// for eg :
// function outer() {
//   let count = 0;
//   return () => count++; }
// const counter = outer(); 
// properties: -

// 18. Window objects = provided by browser window 
// for eg : 
// let url = window.document.URL;
// properties : window, history, nav, location,, screen

// 19. DOM = html objects into js 
// for eg : 
// button.addEventListener("click", myFunction);
// properties : doc, events, styles, attributes

// 20. Web API = provided by browser to interaxct with system
// for eg :
// data.json
// properties : fetch, DOM, storage, geolocation, canvas, history