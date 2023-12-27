let cur=new Date();
console.log(cur);   //2023-12-27T03:34:13.345Z

console.log(new Date().toLocaleDateString());   //27/12/2023
console.log(new Date().toString()); //Wed Dec 27 2023 09:04:13 GMT+0530 (India Standard Time)
console.log(Date.now());

// new Date(year,month,....) 🛑🛑🛑🛑🛑
// 7 num specify year,month,date,hour,minute ,second asn milisecond
// Note : JS count months from 0 to 11  
var d=new Date(2021,0,5,10,33,30,0);
console.log(d.toLocaleDateString());


//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());

// // how to set the indivisual date 

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());