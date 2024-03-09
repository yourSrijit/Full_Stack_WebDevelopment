const express=require('express');
const router=express.Router();
let Listing=require("../models/listing");
let Review=require("../models/review.js");
let wrapAsync=require("../utils/wrapAsync.js");
let ExpressError=require("../utils/ExpressError.js");
let {validateListing,validateReview}=require("../middleware/joiMiddleware.js");


//Index route
router.get("/", wrapAsync(async (req,res)=>{
 const allListings=await Listing.find({});
 res.render("./listings/index.ejs",{allListings})
}));

// add new route
router.get("/new",(req,res)=>{
    res.render("./listings/new.ejs");
});

//show route
router.get("/:id" ,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    if(id ==='terms'){
        res.render("./listings/terms.ejs");
    }
    else if (id === 'privacy') {
        // Handle the privacy page separately
        res.render("./listings/privacy.ejs");
    }
    else {
        // Otherwise, query the Listing model
        let listing = await Listing.findById(id).populate("reviews");
        if(!listing){
            req.flash("error","Listing is not exist!")
            res.redirect("/listings");
        }
        else{
            res.render("./listings/show.ejs",{listing});
        }
    }
}));

//Create route
router.post("/",validateListing,wrapAsync(async (req,res,next)=>{
    let listing=new Listing(req.body.listing);
    await listing.save();
    req.flash("success","New Lisiting Created!")
    res.redirect("/listings");
}));

//edit route
router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing is not exist!");
        res.redirect("/listings");
    }
    else{
        res.render("./listings/edit.ejs",{listing});
    }
    
}));

// route put request
router.put("/:id",wrapAsync(async(req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing 🙄");
    }
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Editing Successful!");
    res.redirect(`/listings/${id}`);
}));

//DESTROY ROUTER(Listings)
router.delete("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deletedListings=await Listing.findByIdAndDelete(id);
    req.flash("success","Lisiting Deleted!")
    res.redirect("/listings");
}));

module.exports=router;