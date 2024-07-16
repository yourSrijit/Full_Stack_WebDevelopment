import User from "../model/userModel.js";
export const getUsersForSidebar =async(req,res)=>{
    try{
        const loggedUserId=req.user._id;

        const filteredUsers=await User.find({ _id :{ $ne: loggedUserId }}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        console.log('Error in getUsersForSidebar ',error.message);
        res.status(500).json({Error:"Internal server error in user controller"})
    } 
} 