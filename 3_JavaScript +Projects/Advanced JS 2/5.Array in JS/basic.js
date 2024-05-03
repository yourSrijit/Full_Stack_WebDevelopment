const persone=["srijit","pikachu","doraemon","nobita"];
console.log(persone.at(-1));

persone.forEach((cur,index,arr)=>{
  console.log(`${cur} ${index}`)
})
//it will not return anything 

const data=persone.map((cur,index,arr)=>{
    return (`${cur} ${index}`)
  })