//những phần tử thõa mãn filter function thì được ở lại,đầu ra là mạng.

var numbers = [1,2,3,4];
var evenNumber = numbers.filter(function (item) {
    return item%2===0;
});
console.log(evenNumber);