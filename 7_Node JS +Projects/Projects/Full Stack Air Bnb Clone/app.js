const express=require('express');
const app=express();
const port=3000;
let mongoose = require('mongoose');
let path=require("path");
let methodOverride=require("method-override");
let ejsMate=require("ejs-mate");
let Listing=require("./models/listing");
let Review=require("./models/review.js");
let ExpressError=require("./utils/ExpressError.js");
const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js");


const session=require("express-session")
const flash=require("connect-flash");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));



const sessionOptions={
    secret:"secretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() +7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    },
};

app.get('/', (req, res)=>{
    res.render("./listings/main.ejs");
})

app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
   next();
})


// paths for Router 
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);




main()
.then(()=>{
    console.log('Successfully connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Tour');

}


// Privacy page 
app.get("/listings/privacy",(req,res)=>{
    res.render("./listings/privacy.ejs")
})
//Terms page
app.get("/listings/terms",(req,res)=>{
    res.render("./listings/terms.ejs")
})

app.all("*",(req,res,next)=>{
next(new ExpressError(404,"Page not found ❌"));
})

// Error handler middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    if (status === 404) {
        res.status(status).render("errorPage.ejs", { message });
    } else {
        res.status(status).render("error.ejs", { message });
    }
});


app.listen(port,()=>{
    console.log('Server is running on port '+port);
})