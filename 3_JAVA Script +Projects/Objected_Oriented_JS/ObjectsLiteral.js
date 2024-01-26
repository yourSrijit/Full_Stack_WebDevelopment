// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  let bioData = { 
      myName : "srijit bera",
      myAge : 22,
      getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
      }
  }

  bioData.getData(); 

// 2nd way no need to write functions as well after es6

let Data = { 
  myName : "thapatechSrijit Beranical",
  myAge : 21,
  getData (){
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  }
}

bioData.getData();


// 👉 What if we want object as a value inside an Object 


let BioData = { 
  myName : {
    realName : "Srijit",
    channelName : "Wandering with srijit" 
  },
  myAge : 26,
  getData (){
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  }
}

console.log(bioData.myName.channelName );

