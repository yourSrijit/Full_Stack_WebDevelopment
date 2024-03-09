const number =['January','February','March','April','May','Jun','July']
const num =[2,3,4,5,10,20,25]
//1. Map() method
//It return a new array ,not changing the original array
let newMonth =month.map((elem,index,array)=>{
    return `The month ${elem} is at index ${index} of ${array}`;
    // return "The month "+elem+" is at index "+index+" Of "+array;
})

let newNum=num.map((curElm,index,arr)=>{
            return `The number are ${curElm} index of ${index} of array ${num}`;  
})
console.log(num);
console.log(newNum);

// 🛑🛑🛑🛑🛑🛑
let arr1=[2,3,4,6,8];
let arr2=arr1.map((cur)=>{
      return cur*2;
}).filter((cur)=>{
      return cur>10;
})

// In one line 
let arr3=arr1.map((cur)=>cur*2).filter((cur)=>cur>10);
console.log(arr3);



// 🛑🛑🛑🛑🛑🛑 
//Differance between map and forEach method

// 1.Returning value
// let newMonth =month.map((elem,index,array)=>{
//     return `The month ${elem} is at index ${index} of ${array}`;
//     // return "The month "+elem+" is at index "+index+" Of "+array;
// })
// console.log(newMonth);


//  return new Array without changing the original array 
// let newforMonth =month.forEach((elem,index,array)=>{
//     return `The month ${elem} is at index ${index} of ${array}`;

// })
// console.log(newforMonth); 

//Not return new array.
// 2.Ability to chain with other month

let arr=[25,36,49,64,81];

// 2.Reduce Method() 🛑🛑🛑🛑🛑🛑
// flatten an array means to converts the 2d or 3d array to a single dimension array ES2020
// The reducer function takes 4 argumets:
// 1.Accumulator
// 2.Curent value 
// 3.Current Index 
// 4.Array
// Reduce is used when we have to find SubmitEvent,average of array 
let newnum=num.reduce((accumulator,curren,indx,arr)=>{
      return accumulator=accumulator+curren
    
},10)
 // ^ this 10 means the initial value of accumulator is 10
console.log(newnum);


// How to fatten an array (Coverting 2d ans 3d array into 1d)
const Array=[
      ['arra1','arra2'],
      ['arra3','arra4'],
      ['arra5','arra6']
];
let flatArr=Array.reduce((accu,curVal)=>{
      return accu.concat(curVal);
});
console.log(flatArr);