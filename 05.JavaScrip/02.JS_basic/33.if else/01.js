function countBills(bills) {
    var total = 0;

    for (const bill of bills) {
        if (!bill.fake) {
            total += bill.value;
        } else {
            console.log("fake bill",bill);
            break;
        }
    }
    return total;
}


var bills = [
    {value : 10000},
    {value : 10000},
    {value : 20000 , fake : true},
    {value : 50000}
];

var total = countBills(bills);
console.log(total);