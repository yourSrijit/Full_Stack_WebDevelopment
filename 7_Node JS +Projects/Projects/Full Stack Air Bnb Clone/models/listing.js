let mongoose = require('mongoose');
let Schema=mongoose.Schema;
const Review=require("./review.js")
const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
      
    },
    image:{
        default:"https://images.unsplash.com/photo-1617735007372-3b69ffb12a5b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type:String,
        set:(v) =>v ===""? "https://images.unsplash.com/photo-1617735007372-3b69ffb12a5b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :v,
    },
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
       
    },
    country:{
        type:String,
    },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }]
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
    
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;