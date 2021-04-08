// 3. Write the pseudocode & the program to calculate GCD of two numbers.


let readlineSync = require('readline-sync');
let first_no = readlineSync.question('Enter First Number..\n')
let second_no = readlineSync.question('Enter Second Number..\n')

while(first_no != second_no){
    if(first_no > second_no) {
        first_no -= second_no;
    }
    else {
        second_no -= first_no;
    }
}

console.log("GCD is" +first_no);
