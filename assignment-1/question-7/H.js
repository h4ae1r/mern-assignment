// 7. Write programs to print the following patterns for an input n = 5:


let readlineSync = require('readline-sync');
let n = readlineSync.question('Enter the Number..\n')

let space = (2 * n - 1) / 2;
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= space; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= 2*i-1; j++){
        if (j == 1 || j==2*i-1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    for (let j = 1; j <= space; j++){
        process.stdout.write("*");
    }
    console.log();
    space--;

    space = 0;
    for (let i = n; i >= 1; i--){
        for (let j = 1; j <= space ; j++){
            process.stdout.write("*");
        }
        for (let j = 1; j <= 2*i-1; j++){
            if (j == 1 || j == 2*i-1){
                process.stdout.write("*");
            }
            else{
                console.log();
            }
        }
        for (let j = 1; j <= space; j++){
            process.stdout.write("*");
        }
        console.log();
        space++;
    }
}