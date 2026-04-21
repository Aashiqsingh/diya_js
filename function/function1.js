
// 1. without return without argument

function demo(){
    console.log("Demo function call....");
    
}


// demo()

// 2. without return with argument

function add(a,b){
    let sum = a+b;
    console.log(sum);
    console.log("diya");
    
}

// add("shree","ram")


// 3. with return without argument

function greet(){
    return "Hello diya how are u?";
}

// let x = greet()
// console.log(x);

// console.log(greet());


// 4. with return with argument

function mul(x,y,z)
{
    return x*y*z;
}


let ans = mul(3,4,5)
console.log("Multiply = ",ans)