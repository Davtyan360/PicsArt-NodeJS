function* gen(maxNum) {
  let firstNum = 0;
  let secondNum = 1;
  let nextNum = firstNum + secondNum;
  while (nextNum <= maxNum) {
    yield nextNum;
    firstNum = secondNum;
    secondNum = nextNum;
    nextNum = firstNum + secondNum;
  }
}
