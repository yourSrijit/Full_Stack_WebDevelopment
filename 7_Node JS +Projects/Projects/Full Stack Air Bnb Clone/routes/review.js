const express=require('express');
const router=express.Router({mergeParams:true});

let Listing=require("../models/listing");
let Review=require("../models/review.js");
let wrapAsync=require("../utils/wrapAsync.js");
let ExpressError=require("../utils/ExpressError.js");
let {validateListing,validateReview}=require("../middleware/joiMiddleware.js");



// Review POST ROUTE FOR STORE IN DB
router.post("/",validateReview,wrapAsync(async (req,res,next)=>{
    let {id}=req.params;
    let { review }=req.body;
    let listing=await Listing.findById(id);
    let newReview=new Review(review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New Review Posted!")
    res.redirect(`/listings/${listing._id}`)
}));
    
//Delete Review Route
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let { id,reviewId}=req.params;
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    req.flash("success","Review Deleted!")
    res.redirect(`/listings/${id}`);
}));

module.exports=router;