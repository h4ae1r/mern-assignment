// 4. Write a program to print even numbers after odd times jump.
// E.g: 2, 6, 14, 26, …
// 2 (then jump 1 even number 4) -> 6
// 6 (then jump 3 even numbers 8, 10, 12) -> 14
// 14 (then jump 5 even numbers 16,18,20,22,24) -> 26


let readlineSync = require('readline-sync');
let num = readlineSync.question('Enter the Number..\n')
let a = 2;
  for(let i = 1; a < num; i++) {
    console.log(a);
    a += (4 * i);
  }
