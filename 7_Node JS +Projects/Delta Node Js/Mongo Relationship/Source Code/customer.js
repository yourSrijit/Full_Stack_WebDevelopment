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

// addCustomer();

//Populate
let findCustomer=async ()=>{
  let result=await Customer.find({}).populate("order");
  console.log(result[0]);
}
findCustomer();

const addOrder=async ()=>{
    let res=await Order.insertMany(
       [ {item:"Chips",price:5},
        {item:"Kurkure",price:10},
        {item:"Rings",price:8}]
    )
}
// addOrder();