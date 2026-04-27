// Week 1 - Day 2 Assignment (CLI Version)
// Function isOddOrEven : returns "Odd" if number is odd, "Even" if number is even
// Accepts a single argument from command line

// 1. Create a function named isOddOrEven that takes a number as parameter
function isOddOrEven(number) {
    // 3. Use a conditional statement to check if the number is divisible by 2
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Get the number from command line argument
const num = parseInt(process.argv[2]);

// 4. Call the function and print the result
console.log(num + " is :: " + isOddOrEven(num));
