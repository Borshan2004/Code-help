let paraElement = document.getElementById("spara");

paraElement.style.backgroundColor = "white";


let secondElement = document.getElementById("sdiv");
secondElement.style.cssText = "background-color: black; color:red; padding: 1.2rem;"


let firstElement = document.querySelector("#fdiv");
// firstElement.setAttribute("class","firstclass");
// firstElement.setAttribute("class","sc");
// firstElement.setAttribute("style","background-color:blue");
firstElement.className = "hellio yse";

let fpE = document.querySelector("#fpara");
fpE.classList.add("borshasn,borno,hasan");
fpE.classList.remove("first");
fpE.classList.toggle("first");