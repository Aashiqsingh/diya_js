// let users = ["diyaa", "aashi", "snehaaa" , "priya", "sudha","nehaa"];


// users.forEach((user)=>{
//     if(user.length > 4)
//     {
//         console.log(user.toUpperCase());
//     }
    
// })


// let ans = users.some((user)=>{
//     return user.length > 6
// })


// console.log(ans);


// let x = users.some((user)=>{
//     return user.startsWith("z")
// })
// console.log(x);


// let x = users.every((user)=>{
//     return user.length > 4
// })

// console.log(x);


// users.forEach((user)=>{
//     if(user.startsWith("s") )
//     {
//         console.log(user.toUpperCase());
//     }
// })


// let x = users.every((user)=>{
//     return user.includes("a")
// })
// console.log(x);

// let flag = false;

// users.forEach((user)=>{
//     if(user.includes("a"))
//     {
//         flag = true;
//     }
// })

// console.log(flag);


// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i])
// }


// user == user[i]

// users.forEach((u)=>{
//     console.log(u.toUpperCase());
    
// })

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((a)=>{
//     console.log(a);
// })


let language = ["hindi", "english", "maths", "science", "arts", "music"];

// for(let i=0;i<language.length;i++){
//     // console.log(language[i]);
//     if(language[i].length > 4)
//     {
//         console.log(language[i].toUpperCase());
//     }
// }


let x = language.some((lang)=>{
    return lang.length < 5
})
console.log(x);


let x2 = language.every((lang)=>{
    return lang.length < 5
})
console.log(x2);



// language.forEach((lang)=>{
//     // console.log(lang);
//     if(lang.length > 4)
//     {
//         console.log(lang.toUpperCase());
//     }
// })