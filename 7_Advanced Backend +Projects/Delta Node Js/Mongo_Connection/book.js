const mongoose =require("mongoose");
main()
.then(()=>{
    console.log('Connection successful');
})
.catch((err)=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        
    },
    price:{
        type:Number,
    },
});
const book =mongoose.model("Book",bookSchema);

//Insert 
// let book1=new book({
//     title:"The theory of everything",
//     author:"Srijit",
//     price:56
// });
let book2=new book({
    title:"All about JAVA",
    author:"Kamalika",
    price:70
});
// book1.save();
book2.save();