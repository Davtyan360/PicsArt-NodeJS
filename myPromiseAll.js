Promise.myAll = function (promiseArray) {
  let valueArray = [];
  let len = promiseArray.length;
  return new Promise((res) => {
    promiseArray.map((promise, index) => {
      if (!(promise.then instanceof Function))
        promise = new Promise((resolve) => resolve(promise));
      promise.then((x) => {
        valueArray[index] = x;
        len--;
        if (len == 0) res(valueArray);
      });
    });
  });
};
