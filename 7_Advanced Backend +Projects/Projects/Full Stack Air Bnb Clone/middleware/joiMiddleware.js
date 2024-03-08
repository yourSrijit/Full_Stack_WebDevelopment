let {listingJoiSchema ,reviewJoiSchema}=require("../schema.js")
let ExpressError=require("../utils/ExpressError.js");
module.exports.validateListing=(req,res,next)=>{
    let result= listingJoiSchema.validate(req.body);
       if (result.error) {
        throw new ExpressError(400, result.error.details[0].message);
        }
        else{
            next();
        }
}

module.exports.validateReview=(req,res,next)=>{
    let result=reviewJoiSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400, result.error.details[0].message);
    }
    else{
        next();
    }
}
