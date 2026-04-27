function isOddOrEven(number) {
   if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
var num1 = 10;
var num2 = 7;
var num3 = 0;
console.log(num1 + " is :: " + isOddOrEven(num1));
console.log(num2 + " is :: " + isOddOrEven(num2));
console.log(num3 + " is :: " + isOddOrEven(num3));
