function dubai(fname,amount){
    console.log(fname +" you are eligible for going dubai with amount " + amount);
}

function singapore(fname,amount){
    console.log(fname +" you are eligible for going singapore with amount " + amount);
}

function goa(fname,amount){
    console.log(fname +" you are eligible for going goa with amount " + amount);
}

function travel(file,cb){
    // {fname:"diya",amount:3100}
    cb(file.fname,file.amount)
}


let firstName = "diya";
let budget = 2100;

if(budget > 4000)
{
    travel({fname:firstName,amount:budget},dubai)
}
else if(budget > 3000)
{
    travel({fname:firstName,amount:budget},singapore)
}
else
{
    travel({fname:firstName,amount:budget},goa)
}