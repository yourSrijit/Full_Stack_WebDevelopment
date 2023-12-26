function sum(c,d){
    var a=10,b=20;
    var total=a+b;
    console.log(c+d);
    return total;
}
var ans=sum(5,10);
console.log(ans);

// Anonymous Function
// var funExp = functiona(m,n){
//     return (m+n);
// }


//🛑🛑 Fat Arrow Function 

// const Fun= ()=>{
//     let a=5;b=6;
//     let sum=a+b;
//     console.log(`So the sum is ${sum}`);
// } 
const Fun= ()=> `So the sum of two number is ${(a=5)+(b=6)}`; //Amother way
console.log(Fun());