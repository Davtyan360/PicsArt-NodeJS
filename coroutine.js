function myCoroutine(gen) {
  let iter = gen();
  return new Promise((res) => {
    function isPromis(next) {
      if (next.done == true) res();
      else if (next.value.then instanceof Function)
        next.value.then((x) => isPromis(iter.next(x)));
      else isPromis(iter.next(next.value));
    }
    isPromis(iter.next());
  });
}
