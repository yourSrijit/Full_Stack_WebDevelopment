

// 1) JavaScript array literal
var array=['srijit','kamalaika',10,'subhra',true];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//for im loop
for(let i in array){   // give the index =i
    console.log(i);
}

// for of loop
for (let elm of array){   //give the element 
    console.log(elm);
}

// for each loop
array.forEach(function(elements,index,array){
    console.log(elements+ ` index ${index } from ${ array}`);
})


// 2) JavaScript Array directly (new keyword)
var array=new Array();
array[0]='srjit';


