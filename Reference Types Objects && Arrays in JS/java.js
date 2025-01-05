// let obj = {
//     name : "Borshan",
//     age : 22,
//     weight : "75 kg",
//     // greed : function(){
//     //     console.log("hello hhow are you")
//     // }
// };

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }


// console.log(obj);{}


// let arr = [1,2,3,4,5]
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[4]);


// arr.push("Borshan");
// arr.push("borno")


// arr.pop();
// arr.pop();


// arr.shift();
// arr.unshift("Borshanpurification");


// console.log(arr.slice(1,3));


// let food = ["apple","banana","icecream","orange","juice"]
// food.splice(1,2,"borshsan","purification");
// console.log(food);




// let arr = [10,20,30,40];

// let ans = arr.map((number)=>{
//     return number*number;
// });
// console.log(ans);


// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })



// let arr = [10,20,25,40,47,49,98,49,2000,30];

// let evennumber = arr.filter((number)=>{
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }

// });
// console.log(evennumber);



// let arr = [2,300,"Borshan","borno",null];
// let ans = arr.filter((value)=>{
//     if(typeof(value)==="string"){
//         return true;

//     }
//     else{
//         return false;
//     }
// });

// console.log(ans);

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(ans);



// let arr = [2,6,7,8,9,3,5];


// ans = arr.sort();
// console.log(arr);

// let arr = [10,20,30,40,50];

// arr.forEach((value,index)=>{
//     console.log("Name:",value,"Index:",index);
// })

let fullname = "Borshan"
for(let valu in fullname){
     console.log(valu);
}