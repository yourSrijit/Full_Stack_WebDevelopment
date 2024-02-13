//one to few relationship 
const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
.then(()=>{console.log('Connected Successfully');})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new Schema({
    username:String,
    address:[
        {
            location:String,
            city:String
        }
    ]
});
const User =mongoose.model("User",userSchema);
const address1=async()=>{
    let user1=new User({
        username:"Srijit",
        address:[{
            location:"Boinchipota",
            city:"Singur"
        }]
    });
    user1.address.push({location:"Chandannagar",city:"Hooghly"});
    let result=await user1.save();
    console.log(result);
}
address1();
 