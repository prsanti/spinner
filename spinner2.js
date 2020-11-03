const spinnerPositions = ['|', '/', '-', '\\'];

const spinner = () => {
  let timer = 100; // increment by 200
  let numOfLoops = 2; // Number of times to loop the spinner like in the original

  while (numOfLoops) {
    for (const position of spinnerPositions) {
      setTimeout(() => process.stdout.write(`\r${position}   `), timer);
      timer += 200;
    }
    numOfLoops--;
  }

  setTimeout(() => process.stdout.write(`\r${spinnerPositions[0]}   \n`), timer);
};

spinner();