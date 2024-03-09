function sum(a,b,c,...other){
    let sum=0;
    for(num of other){
        sum+=num;
    }
    sum+=a+b+c;
    return sum;
}
console.log(sum(1,2,3,4,5,6));