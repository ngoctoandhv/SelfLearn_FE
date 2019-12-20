var employees = [
    {name : 'ty', age : 18},
    {name : 'teo', age : 20},
    {name : 'ma', age : 19}

];

console.log(employees);

var sortedEmployess = employees.sort(function (a,b) {
    //a = employess[1], b= employess[2]
    // expect : a comes after b
    return a.age - b.age ;// >0
});

console.log(sortedEmployess);