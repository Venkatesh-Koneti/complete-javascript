// variables.js

// 1. Global Scope - Declared outside any function → available everywhere
var globalVar = "I am var in Global Scope";
let globalLet = "I am let in Global Scope";
const globalConst = "I am const in Global Scope";

console.log("Global Scope:");
console.log(globalVar);    // var works globally
console.log(globalLet);    // let works globally
console.log(globalConst);  // const works globally



// 2. Function Scope - Variables declared inside a function can only be accessed inside it
function functionScope() {
    var functionVar = "I am var inside function";  
    let functionLet = "I am let inside function";  
    const functionConst = "I am const inside function";

    console.log("\n Inside Function:");
    console.log(functionVar);   // works
    console.log(functionLet);   // works
    console.log(functionConst); // works
}
functionScope();

// These will throw errors if uncommented (not accessible outside function)
// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);



// 3. Block Scope - A block is `{ }` → like inside if, for, while loops etc.
{
    var blockVar = "I am var inside block";   // var is NOT block-scoped
    let blockLet = "I am let inside block";   // let is block-scoped
    const blockConst = "I am const inside block"; // const is block-scoped

    console.log("\n Inside Block:");
    console.log(blockVar);    // works
    console.log(blockLet);    // works
    console.log(blockConst);  // works
}

console.log("\n Outside Block:");
console.log(blockVar);    // still works → because var ignores block scope
// console.log(blockLet);  Error
// console.log(blockConst);Error



// 4. Reassignment
var reVar = 10;
let reLet = 20;
const reConst = 30;

reVar = 100;   // allowed
reLet = 200;   // allowed
// reConst = 300; Error: const cannot be reassigned

console.log("\n Reassignment:");
console.log("var:", reVar);
console.log("let:", reLet);
console.log("const (unchanged):", reConst);



// 5. Redeclaration - Declaring again with the same name
var redeclareVar = "First var";
var redeclareVar = "Redeclared var"; // var allows redeclaration

let redeclareLet = "First let";
// let redeclareLet = "Redeclared let"; Error

const redeclareConst = "First const";
// const redeclareConst = "Redeclared const"; Error

console.log("\n Redeclaration:");
console.log(redeclareVar);    // works
console.log(redeclareLet);    // still first value
console.log(redeclareConst);  // still first value



// 6. Hoisting - variable declarations are moved to the top by JS engine
console.log("\n Hoisting:");
console.log(hoistedVar); // undefined (var is hoisted)
var hoistedVar = "I am hoisted var";

// let & const are hoisted but kept in "Temporal Dead Zone" → error if used before declaration
// console.log(hoistedLet);  
// let hoistedLet = "I am hoisted let";

// console.log(hoistedConst);
// const hoistedConst = "I am hoisted const";