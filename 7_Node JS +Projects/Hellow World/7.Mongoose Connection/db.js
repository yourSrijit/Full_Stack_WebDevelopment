const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/hotel');

}

main().
then((resolve)=>{
    console.log('Mongodb Connection Successfull');
})
.catch(err => console.log(err));
module.exports=mongoose;