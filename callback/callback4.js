// function dubai(fname,amount){
//     return fname +" you are eligible for going dubai with amount " + amount
// }

// function singapore(fname,amount){
//     return fname +" you are eligible for going singapore with amount " + amount
// }

// function goa(fname,amount){
//     return fname +" you are eligible for going goa with amount " + amount
// }

// function travel(file,cb){
//     // {fname:"diya",amount:3100}
//      let ans = cb(file.fname,file.amount)
//      console.log(ans);
// }


// let firstName = "diya";
// let budget = 4100;

// if(budget > 4000)
// {
//     travel({fname:firstName,amount:budget},dubai)
// }
// else if(budget > 3000)
// {
//     travel({fname:firstName,amount:budget},singapore)
// }
// else
// {
//     travel({fname:firstName,amount:budget},goa)
// }



function dubai(fname,amount){
    return fname +" you are eligible for going dubai with amount " + amount
}

function singapore(fname,amount){
    return fname +" you are eligible for going singapore with amount " + amount
}

function goa(fname,amount){
    return fname +" you are eligible for going goa with amount " + amount
}

function travel(file,cb){
    // {fname:"diya",amount:3100}
     return cb(file.fname,file.amount)
     
}


let firstName = "diya";
let budget = 4100;
let ans;

if(budget > 4000)
{
    ans= travel({fname:firstName,amount:budget},dubai)
}
else if(budget > 3000)
{
    ans= travel({fname:firstName,amount:budget},singapore)
}
else
{
    ans= travel({fname:firstName,amount:budget},goa)
}

console.log(ans);