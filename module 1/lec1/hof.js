// function body / function statement
/*
function fun(){
    console.log("fun says Hi !!!!");
}

// function call / invoke
fun();

// In js , a function acts like a variable

// This is function expression
let sayHi = function(){
    console.log("sayHI function says Hi");
}


function callback(){
    console.log("I am passed as a argument");
    return 5;
}

function highOrderFunction( cb ){
    let value = cb(); // call cb
    console.log(value);
}


highOrderFunction( callback );

//Conclusion
// High Order Function => Function which accepts functions as a argument !!
// CallBack Function => Function which are passed as a argument in a function !!  */
function getFirstName(fullName){
    // fullname = "STEVE ROGERS" => string
    fullName = fullName.split(" ");
    // ["STEVE","ROGERS"];
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function fun(fullName , cb){
    // millions of code
    let name = cb(fullName);
    console.log(name);
}



fun("Steve Rogers" , getFirstName);
fun("Iron Man" , getLastName);

// fun => hof
// gFN , gLN => callback functions 

// STEVE STARK
// STEVE MAN
// STEVE ROGERS
// STEVE IRON
// nothing