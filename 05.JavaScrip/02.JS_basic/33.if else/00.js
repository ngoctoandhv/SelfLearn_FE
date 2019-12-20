function tossCoin() {
    var value = Math.random();


    
    if (value < 0.5) {
        console.log(value);
        console.log("Mat ngua");
    } else {
        console.log("Mat up");
    }
}
tossCoin();