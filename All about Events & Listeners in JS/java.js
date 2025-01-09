

// function textElement(event){
// console.log(event);
// let fpara = document.getElementById("fpara");
// fpara.textContent = "hello my name is borshan"
// }

// let fpara = document.getElementById("fpara");

// fpara.addEventListener("click",textElement);

// function teE(event){
//     console.log(event);
//     let acElement = document.getElementById("ac");
//     acElement.textContent = "I have change the link";
//     event.preventDefault();

// }
// let acElement = document.getElementById("ac");
// acElement.addEventListener("click",teE);

let paras = document.querySelectorAll("p");

function eventpara(event){
    alert("You have change:"+ event.target.textContent);

}

for(i=0;i<paras.length;i=i+1){
    let para = paras[i];
    para.addEventListener("click",eventpara);

}