function science(fname,per){
    return fname + " your addmision confirm in science stream with per " + per
}

function commerce(fname,per){
    return fname + " your addmision confirm in commerce stream with per " + per
}

function arts(fname,per){
    return fname + " your addmision confirm in arts stream with per " + per
}


let per = parseInt(prompt("Enter your percentage :"));
let firstName = "diya";
if(per > 90){
    science(firstName,per)
}
else if(per > 70){
    commerce(firstName,per)
}
else{
    arts(firstName,per)
}

// arrow function 
const pi = 3.14;

const demo = ()=>{
    console.log("Demo function call....");
}

demo()