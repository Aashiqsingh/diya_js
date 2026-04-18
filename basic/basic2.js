// There are three keywords.
// 1. var - global scope
// 2. let -- block scope
// 3  const -- block scope -- can't change the value


// var a = 10;
// console.log("value of outer a ",a);


// let b = 20;
// console.log("value of outer b ",b);

// {
//     console.log("value of inner a",a);
//     console.log("value of inner b",b);

//     let c = 30;
//     console.log("value of inner c",c);

//     {
//         console.log("value of innermost c",c);
//         let d = 40;
//     }

    
// }

// console.log("value of outer c = ",c);


// var a = 10;
// console.log("value of a = ",a);

// var a = 20;
// console.log("value of a = ",a);

// let a = 30;
// console.log("value of a = ",a);

// a = 40;
// console.log("value of a = ",a);

const pi = 3.14;
console.log("value of pi = ",pi);

pi = 3.15;
console.log("value of pi = ",pi);