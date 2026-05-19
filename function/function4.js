function dubai(name , age ){
    console.log(name +" you are eliglible for going dubai");
    
}


function singapore(name , age){
    console.log(name +" you are eliglible for going singapore");
}

function bangladesh(name , age){
    console.log(name +" you are eliglible for going bangladesh");
}

function afghanistan(name , age){
    console.log(name +" you are eliglible for going afghanistan");
}

let name = prompt("Enter your name :");
let age = parseInt(prompt("Enter your age :"));
let budget = parseInt(prompt("Enter your budget :"));

if(age > 18)
{
    if(budget > 5000){
        dubai(name,age)
    }
    else if(budget > 4000)
    {
        singapore(name,age)
    }
    else if(budget > 3000)
    {
        bangladesh(name,age)
    }
    else if(budget > 2000){
        afghanistan(name,age)
    }
    else{
        console.log("Insufficient budget for going any country");
    }
}   
else{
    console.log(name +" you are not eliglible for going any country");
}
