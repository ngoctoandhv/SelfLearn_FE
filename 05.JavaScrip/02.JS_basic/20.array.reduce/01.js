var numbers = [1,2,3,4];
var sum = numbers.reduce(function (a,b) {
    console.log(a,b);
    return a+b
},1);
console.log(sum);