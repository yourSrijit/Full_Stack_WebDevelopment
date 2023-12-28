
// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.
 
  //  ➡ Array Destructuring  🏁

  const myBioData = ['Srijit', 'Bera', 26];

//   let myFName = myBioData[0];
//   let myLName = myBioData[1];
//   let myAge = myBioData[2];
  
let [myFName,myAge, myLName] = myBioData;
console.log(myAge);

  // we can add values too 
  
  let [myFName1,myLName1,myAge1, myDegree="MCS"] = myBioData;
  console.log(myDegree);



  // ➡ Object destructuring 🏁
  const myBioData1 = {
    myFname : 'Srijit',
    myLname : 'Bera',
    myAge : 22
  }

  let age = myBioData.age;
  let myFname1 = myBioData.myFname;

  let {myFname,myLname,myAge2, myDegree1="MCS"} = myBioData;
  console.log(myLname);
