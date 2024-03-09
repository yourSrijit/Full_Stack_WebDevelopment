// follow this docs :- https://mongoosejs.com/docs/guide.html
// getting-started.js
const mongoose = require('mongoose');

//Creating conection
main()
.then(()=>{
    console.log('Connection successful 😍');
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Creation schema (it like colum parameters in sql)
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number 
})
//Create Model 
const User=mongoose.model("User",userSchema);

//Model is like collection and objects of the model is like documents


// // Inserting data in DB 
// const user1=new User({name:"Adam",email:'adam@gmail.com' ,age:25})
// user1.save(); //this is an asynchronous function that mean it return a promise

// const user2=new User({name:"Bob",email:'bob@gmail.com' ,age:35})
// user2.save() //return promises
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })


// Insert many
// User.insertMany(
//     [
//         {name:"Tony",email:"tony@gmail,com",age:55},
//         {name:"Bruce",email:"bruce@gmail,com",age:45},

//     ]
// ).then((res)=>{
//     console.log(res);
// })

// User.find({age:{$gt:36}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//Update Methods

// User.findOneAndUpdate({name:"Tony"},{age:40},{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.findByIdAndUpdate("65b6055396c1903d4edf7c14",{age:50}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Delete Methods
User.findOneAndDelete({name:'Bob'}).then((res)=>{
    console.log(res);
    console.log("Deletion Successful");
})
.catch((err)=>{
    console.log(err);
})