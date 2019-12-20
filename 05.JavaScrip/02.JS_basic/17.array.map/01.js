/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function triple(item){
    return item.map(function(x){
        return x*3;
    })
  }
  
  var numbers = [10, 5, 8];
 
  console.log(triple(numbers));