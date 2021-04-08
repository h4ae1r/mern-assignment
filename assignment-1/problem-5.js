// 5. Write a program to count the number of digits in a number.

  
let readlineSync = require('readline-sync');
let num = readlineSync.question('Enter the Number..\n')
let count = 0;

while(num > 0){
    num = num/10;
    count++;
}
console.log(count);