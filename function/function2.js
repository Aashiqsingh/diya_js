function science(fname,per){
    console.log(fname + " your addmision confirm in science stream with per " + per);
}

function commerce(fname,per){
    console.log(fname + " your addmision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " your addmision confirm in arts stream with per " + per);
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