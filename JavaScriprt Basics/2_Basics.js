// const age =56
// let ob =75
// let ob1
// console.log(age)
// // age =65   <-- as age variable is constant so againg we cant change the value
// // console.log(age)
// console.log(typeof(age))
// console.log(typeof(ob))
// console.log(typeof(ob1))

// // Array    Function
// let myfriend=[]
// function addfriend(friend)
// {
//     myfriend.push(friend)     //<-Push the elements from the End of the aray
//     myfriend.unshift(friend)   //<-Push the elements from the start of the aray
   
// }
//     addfriend('srijit')
//     addfriend('kamalika')
//     addfriend('Subhara')
//     // myfriend.pop()
//     console.log(myfriend)

// Chalages
// console.log(5+'5')
// console.log(5-'2')
// console.log("java "+"Script")
// console.log("java "-"Script")   // <--Not a Number
// console.log(true + true)   //<--Treated as true =1 and false =0
// console.log(true + false)

// //Null vs Undefined
// var x =null
// var y
// console.log(typeof(x));
// console.log(typeof(y));

// console.log(x==y);
// console.log(x===y);



//Her we go to the Advanced Java Script😍😍😍
///🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏
// 1️⃣ LET VS CONST  vs  VAR

// var age =20;
// function bio(){
//         if(true){
//             var mynewage = 22
//             console.log("inner "+mynewage);
//             console.log("inner "+age);
//         }
//         console.log("outer "+mynewage);
//             console.log("outer " +age);
// }
// bio();
//VAR is a function scop for that we can acces the variable from anywhere tghat no able incase of let ans const

// let age =20;
// function bio(){
//         if(true){
//             let mynewage = 22
//             console.log("inner "+mynewage);
//             console.log("inner "+age);
//         }
//         console.log("outer " +age);
//         console.log("outer "+mynewage);
// }
// bio(); 

// const age =20;
// function bio(){
//         if(true){
//             const mynewage = 22
//             console.log("inner "+mynewage);
//             console.log("inner "+age);
//         }
//         console.log("outer " +age);
//         console.log("outer "+mynewage);
// }
// bio(); 

//So what can we see that const and let are block scop what are only accessabl inside the paranthesis
//Just for that var is not used now days😘😘😘😵‍💫




//2.Template Literals(Tamplate String)
// ${'expression'}

// for(i=1;i<=12;i++){
//    let x =12
//     console.log(x +"*"+i+"="+x*i);
// }

// for(i=1;i<=12;i++){
//     let x =12
//     console.log(`${x}*${i}=${x*i}`);
// }




//3.Default Parameters
// function a(a,b=10){
// return  sum =a+b;
// }
// a(2);
// console.log(sum);

//Fat Arrow Function
// const sum1= function sum(){
//     let a=10;
//     let b=20;
//     console.log(a+b);   
// }
// console.log(sum1);

// const sum2=()=>{
//     let a=10;
//     let b=20;
//     return a+b;
// }
// console.log(sum2());j