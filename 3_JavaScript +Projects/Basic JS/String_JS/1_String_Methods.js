let txt ="I am Srijit Bera"
// let str=new String("I am Srijit Bera");
console.log(txt);
// console.log(str);
//length ()method
console.log(txt.length);

//Escape method()
let sen=" I am \"Srijit\" Bera";
let sent='I am "Srijit" Bera'; 

//IndexOf  (if not find return -1)  lastIndexOf
console.log(txt.indexOf("Bera"));

//Search  (return -1 if not find)
console.log(txt.search("Bera"));


//Extracting String parts
// 1. slice(start,end);  -> extract a part of astring and return the extracted part in a new string

  var str2="Apple,Bananaa,Kiwi";
  let res=str2.slice(0,5);
  let res1=str2.slice(3,-2);
  console.log(res);

// 2.substring(start,end);    -> similat wit slice but diff is it cannot accept negative indexes 
let res2=str2.substring(9);
// 3. substr(start,end)  -> Similar with slice but the 2nd para is the length of the extracted string
let res3=str2.substr(0,4);
console.log(res3);


// Replacing string content 
//it only change the first occurance of the string but the other words are remain unchange
let string="I am srijitt bera aa good srijitt"
let newStr=string.replace("srijitt","srijit");
console.log(newStr);


// 🛑🛑🛑🛑🛑🛑Extracting string Characters
// There are three methods for extracting string Characters 

// 1.cahrAt()   -> return the character at specified index
// 2.charCodeAt()  -> return the unicode at the specified index
// 3.Property access[]     arr[i]


// The concat method 
let fname="srijit";
let lname="bera";
console.log(fname+lname);
console.log(`${fname } ${lname}`);
console.log(fname.concat(lname));
console.log("",lname);

//Trim()

 
//Converting a String to an Array    split() method
let stn="'a','b','c','d'";
console.log(stn.split(","));