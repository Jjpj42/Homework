
const numberSplit=(num)=>{

    let sum=(num/2);
    let str = (Math.floor(sum) + ',' + Math.ceil(sum));

    return str;

}










console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
