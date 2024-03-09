var arr=['January','February','March',9,true,'Pass','Fail','January','March',9];
// 1.indexOf

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 
 console.log(arr.indexOf('Fail'));
 console.log(arr.indexOf('Fail',4));
 console.log(arr.lastIndexOf('March'));
 
//  2. include 
console.log(arr.includes(true));

// 3. find() 
// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element ✅
const prices = [200,300,350,400,450,500,600];
const findElm=prices.find((cur) => {
       return cur <400;
});
console.log(findElm);

// 4.
// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


console.log(  prices.findIndex((currVal) => currVal > 1400 )  );



// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.



// price < 400
const newPriceTag = prices.filter((elem) => {
  return elem <400;
})
console.log(newPriceTag);


// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

let months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

console.log(months.sort());  //only work on string

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());   //Output ->  [ 1, 100000, 21, 30, 4, 99 ]


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.
 

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.
const count =months.push('Dec');
console.log(count);
console.log(months);



// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.

let count1 =months.unshift('Dec');
console.log(count1);
console.log(months);



// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

console.log(plants);
console.log(plants.pop());
console.log(plants);


// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.shift()); 
console.log(plants);


// Splice Method 
const newMonth=months.splice(4,0,"Dec")    //index delete(0, 1) element
// months.splice(months.length,0,'Dec'); 
console.log(newMonth);

const indexOfMonth=months.indexOf("March");
if(indexOfMonth!=1){
     const updateOfMonth=months.splice(indexOfMonth,1)
     console.log(months);
     updateOfMonth}
else{
    console.log('No Such data found');
    console.log(months);
}