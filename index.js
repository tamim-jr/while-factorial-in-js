// var i =1;
// while (i <=10){
//     console.log(i);
//     i++
// }

function factorial(n){
    var i = 1;
    var fact =1;
    while (i<=n){
        fact = fact* i;
        i++
    }
    return(fact);
}
var result = factorial(10);
console.log(result);


function factorial22(f){
    var i = 1;
    var facto=1;
    while (i<=f){
        facto =facto *i;
        i++ 
    }
    return(facto);
}

var result = factorial22(20);
console.log(result);