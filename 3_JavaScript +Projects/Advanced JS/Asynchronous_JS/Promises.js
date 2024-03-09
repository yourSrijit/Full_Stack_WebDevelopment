// Complexity: Promises can add complexity to your code, particularly if you are not familiar with them. Lack of support in older
// Browsers: Promises are not supported in all browsers, so you may need to include a polyfill in order to use them in older browsers.


// function saveToDb(data, success, failure) {
//     let num = Math.floor(Math.random ()* 10) + 1;
//     if (num > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// };

// saveToDb(4, () => {
//     console.log('Success1: data saved');
//     saveToDb(4, () => {
//         console.log('Success2: data saved');
//         saveToDb(4, () => {
//             console.log('Success3: data saved');
//         }, () => {
//             console.log('decline3: data not saved');
//         })
//     }, () => {
//         console.log('decline2: data not saved');
//     })
// }, () => {
//     console.log('decline1: data not saved');
// });

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*10)+1;
        if(num>4){
            resolve("Data is saved !"); // this is the result which are send to the then() and catch() method
        }
        else{
            reject('Data is rejected');
        }
    });
}


//then() and catch() method
let request=savetoDb('Srijit');

request 
   .then(()=>{
    console.log('Promises resolved');
   })
   .catch(()=>{
    console.log('Promises rejected');
   })

// We can also do this of the upper version 

   savetoDb('Srijit')
   .then(()=>{
    console.log('Promises resolved');
   })
   .catch(()=>{
    console.log('Promises rejected ');
   })


// More improved version -->  Promise Chaining
savetoDb('Srijit').then(()=>{
    console.log('Promises resolved 3');
    return savetoDb('kamalika');
})
.then(()=>{
    console.log('Promises resolved 4');
    return savetoDb('Rumi');
})
.then(()=>{
    console.log('Promises resolved 5');
    return savetoDb('Bisthu');
})
.catch(()=>{
    console.log('Promises Rejected');
})


//We xan also add parameters in the then() and catch() method
savetoDb('Srijit').then((result)=>{
    console.log('Promises resolved 3');
    console.log(result);
    return savetoDb('kamalika');
})
.then((result)=>{
    console.log('Promises resolved 4');
    console.log(result);
    return savetoDb('Rumi');
})
.then((result)=>{
    console.log('Promises resolved 5');
    console.log(result);
    return savetoDb('Bisthu');
})
.catch((result)=>{
    console.log(result);
    console.log('Promises Rejected');
})


//Lets reduce the upper code by using await keyword
console.log('Await is working');
async function Demo(){
    try{
        await savetoDb('SRIJIT',1000);
        await savetoDb('Kamalika',1000);
        await savetoDb('Rumi',1000);
        savetoDb('Bishtu',1000);
    }
    catch{
        
    }

}