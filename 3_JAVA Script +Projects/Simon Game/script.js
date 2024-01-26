let gameOver=new Audio("gameover.mp3");
let click=new Audio("click.mp3");
let levelup=new Audio("levelup.mp3");
let gameSeq=[];
let userSeq=[];

let btns=['a','b','c','d'];
let started=false;
let level=0;
let h3=document.querySelector('h3');

let start=document.getElementById("start");
start.addEventListener('click',function(){
if(started==false){
    started=true;
    levelUp();
}
});

function gameFlash(btn){ 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },70);
}

function userFlash(btn){ 
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },70);
}
function levelUp(){
    levelup.play();
    levelup.currentTime=0;
    userSeq=[];
    level++;
    h3.innerText=`Level no ${level}`;  
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    gameFlash(randBtn);
}
function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
;        }

    }else{
        h3.innerHTML=`Game Over 🥱! Your score is <b> ${level}</b> <br>Press to start the game <button id="start">Start</button> `; 
        
        let start=document.getElementById("start");
start.addEventListener('click',function(){
if(started==false){
    started=true;
    levelUp();
}
});

        gameOver.play();
        gameOver.currentTime=0;
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }

}

function btnPress(){
    click.play();
    click.currentTime = 0;
userFlash(this);
let userColor=this.getAttribute('id');
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}