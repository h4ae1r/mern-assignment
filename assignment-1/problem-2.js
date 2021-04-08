// 2. Write the pseudocode & a program to calculate the simple interest
// based on the inputs(amount, rate, time) provided by the user.


let readlineSync = require('readline-sync');
let amount = readlineSync.question('Enter Amount/Principle..\n')
let rate = readlineSync.question('Enter Rate..\n')
let time = readlineSync.question('Enter Time..\n')
let result =(amount*rate*time)/100;
console.log(result + " is the simple interest.");

