//tương tự như .filter,nó cũng chạy qua từng giá trị một,nhưng khi find function trả về giá
//trị true thì nó sẽ dừng lại,trả về một phần tử

var numbers = [1,2,3,4];
var number = numbers.find(function (x) {
    return x%2===0;
});
console.log(number);