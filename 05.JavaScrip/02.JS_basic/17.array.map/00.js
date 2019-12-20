//là biến đổi các phần tử trong mạng thành các phần tử mới theo một quy tắc nào đấy
//quy tắc được định nghĩa bởi một function

var number=[1,2,3,4];
var squaredNumber = number.map(function (x) {
    return x*x;
});

console.log(squaredNumber);