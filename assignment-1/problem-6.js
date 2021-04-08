// 6. Write a program to reverse a number (9735 -> 5379)


let readlineSync = require('readline-sync');
let num = readlineSync.question('Enter the Number..\n')
let reverse = 0;

while(num > 0){
    let result = n % 10;
    reverse = reverse*10 + result;
    num = num/10;
}
console.log(reverse);