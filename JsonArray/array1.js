let employees = [
    {
        name:"diya",
        age:20,
        gender:"female",
        email:"diya@gmail.com",
    },
    {
        name:"priya",
        age:22,
        gender:"female",
        email:"priya@gmail.com",
    },
    {
        name:"rahul",
        age:23,
        gender:"male",
        email:"rahul@gmail.com",
    }
]

// for(let i=0;i<employees.length;i++)
// {
//     if(employees[i].age >= 22)
//     {
//         console.log(employees[i]);
//     }
// }

// let filterArr = [];
// employees.forEach((emp)=>{
//     if(emp.age >= 22)
//     {
//         // console.log(emp.name);
//         filterArr.push(emp.name);
//     }
// })
// console.log(filterArr);


let ans = employees.filter((emp)=>{
    return emp.age >= 22
})
console.log(ans);



// console.log(employees);
// console.log(employees[0]);
// console.log(employees[1]);
// console.log(employees[2]);

// console.log(employees[0].name);
// console.log(employees[0].age);
// console.log(employees[0].gender);
// console.log(employees[1].name);


// for(let i=0;i<employees.length;i++)
// {
//     console.log(employees[i]);
    
// }

// for(let i=0;i<employees.length;i++)
// {
//     console.log(employees[i].name);
    
// }
// let femaleEmployee = [];
// for(let i=0;i<employees.length;i++)
// {
//     // console.log(employees[i].gender == "female");
//     if(employees[i].gender == "female")
//     {
//         // console.log(employees[i].name);
//         femaleEmployee.push(employees[i].name);
//     }
    
// }
// console.log(femaleEmployee);
