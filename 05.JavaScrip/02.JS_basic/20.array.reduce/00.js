//dùng để thực thi một hàm lên từng phần tử của mạng từ trái sang phải,sau đó
// lấy giá trị trả về thực hiện tiếp,mỗi lần 2 phần tử

var numbers = [1,2,3,4];
var sum = numbers.reduce(function (a,b) {
    console.log(a,b);
    return a+b
});
console.log(sum);