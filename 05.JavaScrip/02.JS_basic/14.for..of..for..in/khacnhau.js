/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
//for..of trả về value của phần tử for..in trả về index của phần tử
var test = {
    name: 'Cuong',
    age: 21,
    school: 'SICT'
  };
  var test2 = [10,20,30];
  for(var value of test2){
    console.log(value);
  }
  for(var value in test){
    console.log(value);
  }