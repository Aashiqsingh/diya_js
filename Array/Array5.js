let language = ["hindi", "english", "maths", "science", "arts", "music"];

// let ans = language.filter((lang)=>{
//     return lang!="science"
// })
// console.log(ans);



// function deleteLang(langName){

//     let ans = language.filter((lang)=>{
//         return lang != langName
//     })


//     console.log(ans);
//     // return ans;
    

// }


// let languageName = "english";
// deleteLang(languageName)



function deleteLang(langName){

    let ans = language.filter((lang)=>{
        return lang != langName
    })



    return ans;
    

}


let languageName = "english";
let afterdelete = deleteLang(languageName)
console.log(afterdelete);