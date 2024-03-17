// The localStorage object allow you to save object in key/vale pair in browser 
// How to store 
localStorage.setItem("key1","value1");

// how to get 
localStorage.getItem("key1");

// how to remove data 
localStorage.removeItem("key1");

// todo local storage can onlu store only strings so when you want to store a complex
// sata structure like an array or object you need to convert it to a string using JSON.stringify
//and when you retrive the json file in original form use `JSON.parse`

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
