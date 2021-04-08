// 7. Write programs to print the following patterns for an input n = 5:

        // B. 
                    // 1
                    // 1 2
                    // 1 2 3
                    // 1 2 3 4
                    // 1 2 3 4 5


let readlineSync = require('readline-sync');
let num = readlineSync.question('Enter the Number..\n')

let row = 1;
while(row <= num){

    let col = 1;
    while(col <= row){
        process.stdout.write(col +" ");
        col += 1;
    }
    process.stdout.write("\n");
    row += 1;
}