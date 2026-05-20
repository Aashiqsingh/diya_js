const science = (fname,per)=>{
    return fname + " your admision confirm in science stream with per " + per
    
}

const commerce = (fname,per)=>{
    return fname + " your admision confirm in commerce stream with per" + per
}

const arts = (fname,per)=>{
    return fname + " your admision confirm in arts stream with per" + per
}


let percentage = 94;
let flag;

if(percentage > 90)
{
    flag = science("priya",percentage)
}
else if(percentage > 70)
{
    flag = commerce("priya",percentage)
}
else if(percentage > 50)
{
    flag = arts("priya",percentage)
}
else{
    console.log("sorry you are not eligible for admission");
}

console.log(flag);
