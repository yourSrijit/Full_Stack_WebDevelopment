# Mongoose Realtionship
- One to few
- One to many 
- One to many Squillions(Million)

### 1.How to Implements one to few
```
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
 
```
### 2.How to Implements referance in one to many 
```
//one to many relationship 
const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
.then(()=>{console.log('Connected Successfully');})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
//Order Schema
const orderSchema=new Schema({
    item:String,
    price:Number
});
const Order=mongoose.model("Order",orderSchema);

// Customer Schema
const customerSchema=new Schema({
    name:String,
    order:[{
        type:Schema.Types.ObjectId,
        ref:"Order"
    }]
});
const Customer=mongoose.model("Customer",customerSchema);
let addCustomer=async ()=>{
    let customer1=new Customer({
        name:"Srijit",
    });
    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"Kurkure"});
    let order3=await Order.findOne({item:"Rings"});
     customer1.order.push(order1);
     customer1.order.push(order2);
     customer1.order.push(order3);
     let result=await customer1.save();
     console.log(result);
}

addCustomer();


// const addOrder=async ()=>{
//     let res=await Order.insertMany(
//        [ {item:"Chips",price:5},
//         {item:"Kurkure",price:10},
//         {item:"Rings",price:8}]
//     )
// }
// addOrder();
```

## Populate
- Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.
```
let findCustomer=async ()=>{
  let result=await Customer.find({}).populate("order");
  console.log(result[0]);
}
findCustomer();
```


