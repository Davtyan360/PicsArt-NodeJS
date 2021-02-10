const myIteratorFibonacci = {
  [Symbol.iterator]: function () {
    let max = 50;
    let firstNum = 0;
    let secondNum = 1;
    return {
      next: function () {
        let nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
        return {
          value: nextNum < max ? nextNum : undefined,
          done: this.value ? true : false,
        };
      },
    };
  },
};
