
/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 *  sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    return num * 2;
  }
  
  function sumAndDo(nums, callback) {
    var sum = 0;
   // console.log(nums.length);
    for(i = 0;i < nums.length;i++){
        sum += nums[i];
    }
    console.log(callback(sum));
  }
  
  sumAndDo([1, 2, 3], double);