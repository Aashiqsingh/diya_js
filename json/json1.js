// key : value 
// json --> javascript object notation


// let student = {
//     name:"diya",
//     age:20,
//     gender:"male",
//     email:"diya@gmail.com",
// }

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.gender);
// console.log(student.email);


let employee = {
    name:"diya",
    age:20,
    gender:"female",
    email:"diya@gmail.com",
    address:{
        city:"delhi",
        state:"delhi",
        pincode:110001
    },
    mobile:[78629767822,23654363872]
}

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.gender);
console.log(employee.address);
console.log(employee.address.city);
console.log(employee.mobile);
// console.log(employee.mobile[0]);
// console.log(employee.mobile[1]);


for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
}





