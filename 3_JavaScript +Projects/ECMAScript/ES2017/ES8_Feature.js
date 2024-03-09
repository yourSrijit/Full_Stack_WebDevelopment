// ES 8 Features 

// 1.String Padding 
// 2.Object.values()
// 3.Objects.entries()


const message = "my name is vinod";
console.log(message);
console.log(message.padStart(5));
console.log(message.padEnd(10));


const person = { name: 'Fred', age: 87 };

// // console.log( Object.values(person) );
const arrObj =  Object.entries(person);
console.log(Object.fromEntries(arrObj));