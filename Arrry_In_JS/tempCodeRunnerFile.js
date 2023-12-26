const Array=[
      ['arr1','arr2'],
      ['arra3','arra4'],
      ['arra5','arra6']
];
let flatArr=Array.reduce((accu,curVal)=>{
      return accu.concat(curVal);
});
console.log(flatArr);