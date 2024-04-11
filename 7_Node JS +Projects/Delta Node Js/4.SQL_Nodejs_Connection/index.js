const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
let express=require("express");
let app=express();
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//made connection object 
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'NodeDemo',
    password:'system'
});


let getRandomUser=()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};
//Inserting new data
// let q="INSERT INTO USER(ID,USERNAME,EMAIL,PASSWORD) VALUES ?";
// let data=[]

//   for(let i=0;i<50;i++){
//     data.push(getRandomUser());

//   }

let port=3000;
//Home route
app.get("/",(req,res)=>{
  let q=  `select count(*) from user`;
  try{
    connection.query(q,(err, result) => {
          if(err) throw err;
          let count=result[0]["count(*)"]
          res.render("home.ejs",{count});
    })
}
catch(err){
    res.send("Someting is wrong");
}
})
//Show user route 
app.get("/user",(req,res)=>{
  let q=  `SELECT * FROM USER`;
  try{
    connection.query(q,(err, users) => {
          if(err) throw err;
          // res.send(users);
          res.render("showuser.ejs",{users});
    })
}
catch(err){
    res.send("Someting is wrong");
}
});

// Edit Route 
app.get("/user/:id/edit",(req,res)=>{

   let { id } =req.params;
   console.log(id);
   let q= `SELECT * FROM USER WHERE ID="${id}"`;
   console.log(q);

   try{
    connection.query(q,(err, result) => {
          if(err) throw err;
          console.log(result);
          let data=result[0];
          res.render("edit.ejs",{ data });
    })
}

catch(err){
  console.log(err);
    res.send("Someting is wrong");
}
});

//Updatae(DB) Route
app.patch("/user/:id",(req,res)=>{
  let {id }=req.params;
  let{ PASSWORD:userPassword,USERNAME:newUsername}=req.body;
  let q= `SELECT * FROM USER WHERE ID="${id}"`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      
      let data=result[0];
      console.log(data);
      if(userPassword != data.PASSWORD){
        res.send("Wrong password try again!");
      }
      else{
        try{
          let q2= `UPDATE USER SET USERNAME="${newUsername}" WHERE ID="${id}"`;
          connection.query(q2,(err,result)=>{
            if(err) throw err;
            console.log(result);
            console.log('Updation successfull');
            res.redirect("/user");
          })
        }
        catch(err){
           res.send("Something went wrong")
        }
      }
    })
  }

  catch(err){
    console.log(err);
    res.send("Something went wrong !")
  }
  

});

//Add route
app.get("/user/new",(req,res)=>{
  res.render("new.ejs");
});

//Queary to insert data
app.post("/user/new",(req,res)=>{
  let{PASSWORD:uPsw,USERNAME:uName,EMAIL:uEmail} =req.body;
  let id=uuidv4();
  let q=`INSERT INTO USER VALUES "${id}","${uName}","${uEmail}","${uPsw}" `;
})



//Delete User
app.get("/user/:id/delete",(req,res)=>{

  let { id } =req.params;
  let q= `SELECT * FROM USER WHERE ID="${id}"`;


  try{
   connection.query(q,(err, result) => {
         if(err) throw err;
         let data=result[0];
         res.render("delete.ejs",{ data });
   })
}
catch(err){
   res.send("Someting is wrong");
}
});

//Delete in DB Route
app.delete("/user/:id",(req,res)=>{
  let {id }=req.params;
  let{PASSWORD:userPassword}=req.body;
  console.log(userPassword);
  let q= `SELECT * FROM USER WHERE ID="${id}"`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let data=result[0];
      console.log(data);
      if(userPassword != data.PASSWORD){
    // Display an alert pop-up for wrong password
            res.send(`
            <script>
              alert('Wrong password. Please try again.');
             window.location.href = '/user';
            </script>
       `);
      }
      else{
        try{
          let q2= `DELETE FROM USER WHERE ID="${id}"`;
          connection.query(q2,(err,result)=>{
            if(err) throw err;
            console.log('Deletion is successfull');
            res.redirect('/user');
          })
        }
        catch(err){
           res.send("Something went wrong")
        }
      }
    })
  }

  catch(err){
    console.log(err);
    res.send("Something went wrong !")
  }
});






app.listen(port,()=>{
     console.log('Server is listening in port no 3000');
})

// try{
//     connection.query(q,[data],(err, result) => {
//           if(err) throw err;
//           console.log('Connection made successfully 😋');
//           console.log(result);
//     })
// }
// catch(err){
//     console.log(err);
// }
// connection.end();


