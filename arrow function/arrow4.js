const pdfHandler = (file)=>{
    return file.name  + " it is a pdf file.."
}

const wordHandler = (file)=>{
    return file.name  + " it is a word file.."
}

const jpgHandler = (file)=>{
    return file.name  + " it is a jpg file.." + file.size
}

const pngHandler = (file)=>{
    return file.name  + " it is a png file.."
}

let fileName = "test.jpg";
let flag;

if(fileName.endsWith(".pdf")){
    flag = pdfHandler(
        {
            name:fileName,
            size:"1000kb"
        }
    )
}
else if(fileName.endsWith(".word")){
    flag = wordHandler({name:fileName,size:"2000kb"})
}
else if(fileName.endsWith(".jpg")){
    flag = jpgHandler({name:fileName,size:"3000kb"})
}

else if(fileName.endsWith(".png")){
    flag = pngHandler({name:fileName,size:"4000kb"})
}
else{
    console.log("file format not supported");
}

console.log(flag);
