let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    alert("Hello diya..")
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "red"
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "yellow"
})