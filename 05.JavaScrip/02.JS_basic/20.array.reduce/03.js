var product = [
    {name:'A' ,quantity:2, unitPrince:10 },
    {name:'B' ,quantity:5, unitPrince:20 },
    {name:'A' ,quantity:2, unitPrince:30 }
];

var total = product.reduce(function (currentTotal, product) {
    return currentTotal + product.quantity * product.unitPrince;
},0);

console.log(total);