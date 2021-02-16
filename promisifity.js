function promisifity(func) {
  return (...x) => {
    return new Promise((res, rej) => {
      func(...x, (err, data) => {
        console.log(...x);
        if (err) rej(err);
        res(data);
      });
    });
  };
}
