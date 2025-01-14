// let firstpromise = new Promise((resolve, reject) => {
//     // console.log("babar");
//     // // resolve(101);
//     // reject(new Error("there is a error"));
    
// setTimeout(function sayMyname(){
//     console.log("hello ");
// },10000);
// resolve(1);
    
// });


// let Promise1 = new Promise((resolve, reject) => {
//     let sucess = false;
//     if(sucess){
//         resolve("Promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }


// });

// Promise1.then((message)=>{
//     console.log("Ans :" + message);
// }).catch((error)=>{
//     console.log("Error:" + error);
// })

// Promise1.then((message)=>{
//     console.log("First message:" + message);
//     return "Promise fulfilled seccond message";
// }).then((message)=>{
//     console.log("Second message:" + message);
//     return "Promise fulfilled Third message";
// }).then((message)=>{
//     console.log("Third message:" + message);
// }).catch((erro)=>{
//     console.error(erro);
// }).finally((message)=>{
//     console.log("i will always run");
// })


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"First");
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"Second");
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,3000,"Third");
})

let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Forth");
})

Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{console.log(values)})