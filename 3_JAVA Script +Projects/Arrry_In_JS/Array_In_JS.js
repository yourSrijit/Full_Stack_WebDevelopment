const myfriend = ['Srijit', 'Subhra', 'Biswajit', 'Anuran', 'Mia khalifa']

////Map() Reduce() Filter() Method in Array




//1.Map()
// Returns a new array containing the result it don't mutate the original array
// let friend=myfriend.map((elem,index,arr)=>{
//     // return elem;
//     return `The index is ${index} value is ${elem} of array ${arr}`;

// })
// console.log(friend);


// 2.forEach() Method
// myfriend.forEach((elem,index,arr)=>{
//     // return elem;
//     console.log(`The index is ${index} value is ${elem} of array ${arr}`);

// })
// console.log(myfriend);




// Chalange 1
let num = [25, 36, 81, 49, 121]
// make a array of sqare root of thr above array
// let sqrtnum=num.map((elem)=>{
//     return Math.sqrt(elem);
// })
// console.log(sqrtnum);



//Chalamge 2
// let num1 = [2, 4, 6, 8, 10, 12, 40]
// //Multiply the elements of the a array with 2 and then filter out which elements are gretter tha 15
// let find = num1.map((elem) =>
//     2 * elem
// ).filter((elements) =>
//     elements > 15
// )
// console.log(find);

// ***** to shorten the call back function remove 'return','{ }', ';' ****