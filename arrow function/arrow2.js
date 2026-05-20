const science = (fname,per)=>{
    console.log(fname + " your admision confirm in science stream with per " + per);
    
}

const commerce = (fname,per)=>{
    console.log(fname + " your admision confirm in commerce stream with per" + per);
}

const arts = (fname,per)=>{
    console.log(fname + " your admision confirm in arts stream with per" + per);
}


let percentage = 84;

if(percentage > 90)
{
    science("priya",percentage)
}
else if(percentage > 70)
{
    commerce("priya",percentage)
}
else if(percentage > 50)
{
    arts("priya",percentage)
}
else{
    console.log("sorry you are not eligible for admission");
}