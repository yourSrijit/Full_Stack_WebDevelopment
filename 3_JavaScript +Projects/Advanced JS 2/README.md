# Advanced JS practice 2
- This is the practice folder of advanced js from [Thapa Technoical](https://youtu.be/YwsOCN8woA8?si=vjtXdh9nqPtQ0-3Y)  

# Event In JS
![Screenshot 2024-03-09 170111](/assets/Screenshot%202024-03-09%20170111.png)!

[Screenshot 2024-03-09 170111](https://i.imgur.com/7B1bt2I.png)

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