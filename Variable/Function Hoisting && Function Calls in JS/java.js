// function sayMyname(finalName){
//     console.log(finalName);
// }
// sayMyname("babar");

// console.log(age);
// var age = 25;


// function greetMe(greet,myname){
//     console.log("hello",myname);
//     greet();
// }



// function greet(){
//     console.log("nice to meet with you");
// }

// // greet();
// greetMe(greet,"borshan");


// function slove(number){
//     return function(number){
//         return(number*number);
//     }
// }


// let ans = slove(5);
// finalans = ans(10);
// console.log(finalans);


const arr = [
    function(a,b){
        return a+b 
    },
    function(a,b){
        return a-b 
    },
    function(a,b){
        return a*b 
    }
];
let firstans = arr[2];
let ans = firstans(10,5);
console.log(ans);