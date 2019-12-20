/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    for (i = 0; i < n; i++) {
        arr.pop();
    }
    console.log(arr)
  }
removeEnd([2, 3, 1, 8, 9, 7], 3)