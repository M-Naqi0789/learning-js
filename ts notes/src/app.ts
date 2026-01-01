// typescript being an addon on js 
// ts bts - code - lexer - parser - binder - checker - emmiter - generator
// codes with its range of errors, goes through lexer breaking code into tokens, to parser which converts these tokens into AST or CST (synatax tree), to binder which makes symbol tables or arent pointer or flow nodes, to checker which strictly checks codes twice, finally emmiter generates clean js code

// assigning types
// inference (automatic assigning of type)
// for eg :
// let name = "naqi"
// type annotation (manual assigning of type) string, boolean, number 
// for eg :
// let name : string = "naqi"
// properties like readonly allows not to change value later

// union and any 
// union - assigning multiple data types/ or self made multiple data types
// for eg :
// let name : 'muhammad' | 'naqi' = 'naqi';
// any - allows all data types
// unknown type - need to be assigned before using

// type narrowing - handling results with union types 
// for eg : 
// function getID(type : number | string){
//     if (typeof type === 'string') {
//         return `Registered ${type}`
//     } else {
//         return `ID:${type}`
//     }
// }

// more about types 
// forceful type assertion - for safety checks
// for eg :
// let random = "89"
// let checker : number = (random as string).length

// normal vs interface 
// normally predefining types seprately in a variable if they are gonna repeat again and again
// for eg :
// type Order = {
//     quality: string;
//     quantity: number;
//     confirmed: boolean;
// };
// interfaces - typically used with class 
// for eg :
// interface Order {
//     quality: string;
//     quantity: number;
//     confirmed: boolean;
// };

// arrays - defining type of values in an array
// for eg :
// const menu:string[] =  ["intalian", 'fastfood']

// enums - limiting choice 
// for eg :
// enum size {
//     small, medium, large
// }
// const order = size.large

// generic - defining types according to task
// interface call<value> {
//     say:value 
// }
//  const name: call<string> = {
//     say:"naqi"
//  }
//   const digit: call<number> = {
//     say:1
//  }
