var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:2
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:1
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true,
                isMarried:false,
                child:0
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:0
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false,
                isMarried:false,
                child:0
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:2
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:0
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:1
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false,
                isMarried:false,
                child:0
            }
            
        ]
    },
]


// console.log(departments[0].name);

// departments.forEach((depart)=>{
//     console.log(depart.name);
    
// })

// let x = departments.map((depart)=>{
//     return depart.name
// })
// console.log(x);


// let x = departments.map((depart)=> {
//     return depart.employees.filter((emp)=>{
//         return emp.gender == "male"
//     })
// })
// console.log(x);


// let x = departments.map((depart)=> depart.employees.filter((emp)=> emp.gender == "male"))
// console.log(x);


// find - specific 
let x = departments.find((depart)=>{
    return depart.name == "Finance"
}).employees.filter((emp)=>{
    return emp.gender == "female"
})
console.log(x);