// 7. Write programs to print the following patterns for an input n = 5:
//      D.. 
                                                        //         1
                                                        //       2 3 2
                                                        //     3 4 5 4 3
                                                        //   4 5 6 7 6 5 4
                                                        // 5 6 7 8 9 8 7 6 5

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
          process.stdout.write((i + k) + " ");
          ++count;
      } else {
          ++count1;
          process.stdout.write((i + k - 2 * count1) + " ");
      }

      ++k;
    }
    count1 = count = k = 0;

    console.log();
}