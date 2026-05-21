function demo(){
    console.log("This is a demo function");
}



function test(x){
    x()
    // console.log(x);
    
}

// test(12)
// test("ram")
// test(true)
// test(12.56)


test(demo)