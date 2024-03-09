let btn1=document.getElementById("left");
let btn2=document.getElementById("right");
let copyDiv=document.querySelector(".copycode");
let hexValue='0123456789abcdef';
var rgb1='#555';
var rgb2='#fff';

const getHexValue=()=>{ 
    let hexValue='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++){
     color+=hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn1.addEventListener('click',()=>{ 
    rgb1=getHexValue();
   document.getElementById("left").innerText=rgb1;
   document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
   copyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})
   `;
})
btn2.addEventListener('click',()=>{ 
     rgb2=getHexValue();
    document.getElementById("right").innerText=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})
   `;
 })


 copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.innerHTML);
    alert("Copied Successfull");
    
 })