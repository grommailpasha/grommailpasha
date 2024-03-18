const _ = require('lodash');
const isPrime = require('is-prime');

// Function to calculate nth Fibonacci number
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

// Function to check if a number is prime
function isNumberPrime(num) {
    return isPrime(num);
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = {
    fibonacci,
    isNumberPrime,
    reverseString
};
