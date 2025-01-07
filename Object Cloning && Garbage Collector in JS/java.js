// let obj = {
//     age:25,
//     weight:75,
//     height:6.2
// }

// console.log(obj);
// obj.color = "white"
// console.log(obj);


//making clone:

let src = {
    Name:"Borshan Purification",
    age:21,
    weight:75,
    height:5.6
}

let src2={
    name:"Borshan",
    work:"student"

}
// let dest ={...src};

// dest = Object.assign({},src,src2);
// src.age = 25;


let dest = {};
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;
}


console.log(src);
console.log(dest);


