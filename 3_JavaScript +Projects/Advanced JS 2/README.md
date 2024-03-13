# Advanced JS practice 2
- This is the practice folder of advanced js from [Thapa Technoical](https://youtu.be/YwsOCN8woA8?si=vjtXdh9nqPtQ0-3Y)  
---

## 1. Event In JS

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


## (Project-1) Liner gradient Changer 

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


---

## 2. Local Storage
- It allow to store objects in form of key/value pair
- There have no expiration data
- The data is not deleted when the browser is closed and available for future sessions

```
// How to store 
localStorage.setItem("key1","value1");

// how to get 
localStorage.getItem("key1");

// how to remove data 
localStorage.removeItem("key1");

```

- Todo local storage can only store only strings so when you want to store a complex
data structure like an array or object you need to convert it to a string using `JSON.stringify(Obj)`
and when you retrive the json file in original form use `JSON.parse`

```
let info={
    Fname:"srijit",
    Lname:"Bera",
    Skills:["C++","C","JAVA","REACT","CP"],
    Address:{
        pin:456965,
        star:"Sun",
        planate:"Earth"
    }
}

//As the data is not a string so we need to store it as a string
// How to store 
localStorage.setItem("key1",JSON.stringify(info));

// how to get 
JSON.parse(localStorage.getItem("key1"));

// how to remove data 
localStorage.removeItem("key1");

```

## Todo Project with local storage Demo
 
 ![Demo Video](https://i.imgur.com/Re69tte.mp4)

## 3.Date Object in JS
  9 WAY TO CREATE A NEW DATE OBJECT
  ```
  new Date()
  new Date(date string)
  new Date(year,month)
  new Dtae(year,month,day)
  new Dtae(year,month ,day,hour)
  new Date(year,month ,day,hour,min)
  new Date(year,month ,day,hour,min,sec)
  new Date(year,month ,day,hour,min,sec,ms)
  new Date(milisecond)
  ```