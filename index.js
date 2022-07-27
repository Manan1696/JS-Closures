//Q1:

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());   //1
alert(counter());   //2
alert(counter());   //3
alert(counter());   //4


//Q2:

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?  //1
  }
  console.log(count); // What is logged?    //0
})();


//Q3:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?   
    }, 1000);
}


//Q4:Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function rect(){
    let len = 7;
    return function() {
    let bre = 9;
    console.log(len * bre);
};
}
let cal = rect();
cal();


//Q6:Print Output

var a = 12;
(function () {
  alert(a);
})();

//Output - (alert-12)


//Q7:
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


//Q8:
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +    //123
        "innerArg = " + innerArg + "\n" +    //456
        "outerVar = " + outerVar + "\n" +    //a
        "innerVar = " + innerVar + "\n" +    //b
        "globalVar =" + globalVar);          //xyz
    
    })(456);
})(123);