// 1. Change the text inside the h2 tag  
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText =h2.innerText +"Srijit Bera";
// console.dir(h2.innerText);

// 2. Change the each box 
let divs=document.querySelectorAll(".box");

// 1st box = divs[0];
// 2nd box = divs[1];
// 3rd box = divs[2];

//--> Normal jindegi
// divs[1].innerText="Srijit Bera";

//--> Mentos wala jindegi
let i=0;
for(div of divs){
    div.innerText="Srijit Bera "  +i;
    i++;
}