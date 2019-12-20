// Nói một cách dễ hiểu, callback tức là ta truyền một đoạn code (Hàm A) 
// này vào một đoạn code khác (Hàm B). 
// Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).

var a = {
    b:function (onFinish) {
        console.log("in ra man hinh");
        onFinish();
    }
};
var beep = function () {
    console.log("tit tit");
};
a.b(beep);