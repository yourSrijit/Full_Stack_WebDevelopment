let fs=require("fs");
let os=require("os");

let user=os.userInfo();
console.log(user);

fs.appendFile('temp.txt',"Hi Srijit ",()=>{
    console.log('Successfully Write in the file');
})