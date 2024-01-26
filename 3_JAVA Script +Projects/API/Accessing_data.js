let jsonResp='{"fact":"In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.","length":121}';

//.parses() to parse a string data into a js object
let validResp=JSON.parse(jsonResp);
console.log(validResp.fact);



// To parse JS object into JSON 
let student={
    name:"srijit",
    marks:95,
};
let jsonresp=JSON.stringify(student)
console.log(jsonresp)