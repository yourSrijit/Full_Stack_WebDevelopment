export const sendMessage =async(req,res)=>{
    try{
        const {message}=req.body;
        const {id}=req.params;
        const senderId=req.user._id;

    }
    catch(error){
        console.log('Erro5r in sendMessage controller ',error.message);
        res.status(500).json({ error:"Internal server error"})
    }
}