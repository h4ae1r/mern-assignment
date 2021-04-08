// 7. Write programs to print the following patterns for an input n = 5:

let readlineSync = require('readline-sync');
let n = readlineSync.question('Enter the Number..\n')

for (let i = 1; i <= n; i++){
    
    let emp_spc = 2 * n - 2 * i;
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= emp_spc; j++){
        process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }

    console.log();
}

for (let i = n; i >= 1; i--){

    let emp_spc = 2 * n - 2 *i;
    for (let  j =1; j <= i; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= emp_spc; j++){
        process.stdout.write(" ");
    }
    for (let  j =1; j <= i; j++){
        process.stdout.write("*");
    }

    console.log();
}