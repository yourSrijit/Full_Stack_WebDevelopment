# Advanced JS practice 2
- This is the practice folder of advanced js from [Thapa Technoical](https://youtu.be/YwsOCN8woA8?si=vjtXdh9nqPtQ0-3Y)  

# Event In JS

![Screenshot 2024-03-09 170111](https://github.com/yourSrijit/Full_Stack_WebDevelopment/assets/91645620/49c85e30-d6db-4009-80b7-c5667745011a)

## Mouse Events
```
addEventListner( type,function)

type= click,mouseover
```
 
- onclick()
- ondblclick()
- onmouseover()

## Keyboard Events
- keydown()
- keyup
```
addEventListner('keydown',(event)=>{
    event.key                 //Return the presses key
    event.code               //Return the key code
    event.key.charCodeAt(0) //Return the aciii value
    event.type             // Return the typr keydown or keyup
})
```


# 1.Liner gradient Changer 

```
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
 ```

 Demo 
 
https://github.com/yourSrijit/Full_Stack_WebDevelopment/assets/91645620/cbecce63-eaf9-492a-8b0b-fc3c47d2d2ca



