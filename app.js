// JS OBJECTS 

// 1. arrays = stores list of elements with a single name using numbered indexes. 
// for eg :
// const cars = ["Saab", "Volvo", "BMW"];
// properties : methods, length, loops, accessibility, search, sort, iterations, sets

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
// properties : methods, parameters, expressions, arrow function  

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
// properties : methods

// 9. map  = tore collections of key-value pairs, similar to a dictionary
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
// properties : states, methods, 

// 15. proxy  =  wrap other objects, ets you control operations on them, can trap and intercept code  
// for eg :
// const proxy = new Proxy(target, handler);
// properties : targets (og function), handlers (traps methods using reflect)
