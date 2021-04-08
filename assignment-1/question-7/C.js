// 7. Write programs to print the following patterns for an input n = 5:
    // C.
                                    //           1 
                                    //         1 2 1
                                    //       1 2 3 2 1
                                    //     1 2 3 4 3 2 1
                                    //   1 2 3 4 5 4 3 2 1

let readlineSync = require('readline-sync');
let rows = readlineSync.question('Enter the Number..\n')
let k = 0, count = 0, count1 = 0;

for (let i = 1; i <= rows; ++i) {
    for (let space = 1; space <= rows - i; ++space) {
        process.stdout.write("  ");
        ++count;
    }

    while (k != 2 * i - 1) {
        if (count <= rows - 1) {
          process.stdout.write((k + 1) + " ");
          ++count;
        } else if(count > rows - 1){
          process.stdout.write((k + 1) + " ");
        }

        ++k;
    }
    count1 = count = k = 0;
    console.log();
}