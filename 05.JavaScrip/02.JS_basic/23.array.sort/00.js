//dùng để sắp xếp các phần tử trong mạng

var number = [1,2,4,6,7];
var sort = number.sort(function (a , b) {
    return a-b; // in ra tu nho den lon
    //return b-a // in ra tu lon den be
});
console.log(sort);