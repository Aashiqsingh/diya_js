function science(fname,per){
    console.log(fname + " your admision confirm in science stream with per " + per);
    
}

function commerce(fname,per){
    console.log(fname + " your admision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " your admision confirm in arts stream with per " + per);
}



// cb -- callback 
function admission(fname,per,cb){
    cb(fname,per)
}


let name = "diya";
let percentage = 85.5;

if(percentage > 80)
{
    admission(name,percentage,science)
}
else if(percentage > 60)
{
    admission(name,percentage,commerce)
}
else{
    admission(name,percentage,arts)
}