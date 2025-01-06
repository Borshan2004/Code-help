// class human{
//     age = 21;
//     weight = 75;
//     #height = 5.6;

//     constructor(newAge,neWeight,newHeight){
//         this.age = newAge;
//         this.weight = neWeight;
//         this.#height = newHeight;

//     }

//     walking(){
//         console.log("I like to walk in the evening",this.#height);

//     }

//     running(){
//         console.log("i don't like to run");
//     }

//     get overHeight(){
//         return this.#height;
//     }

//     set updateHeight(value){
//         this.#height= value;
//     }


// }

// let obj = new human(32,69,5.9);
// console.log(obj.age);
// console.log(obj.weight);

// obj.walking()
// console.log(obj.overHeight);

// obj.updateHeight = 6.7;
// console.log(obj.overHeight);


// function sayName(lName = "borno"){
//     console.log("My name is :",lName);
// }
// sayName();


// function sayFriend(lName = "Boss",fName = "loss"){
//     console.log("My name is ",lName,"and my friend name is ",fName);

// }
// sayFriend();

function solve(value = {age:10,wt:25,ht:6.7}){
    console.log("My ans is",value );
}
solve();
