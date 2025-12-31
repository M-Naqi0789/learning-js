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


// 1:40:00 

