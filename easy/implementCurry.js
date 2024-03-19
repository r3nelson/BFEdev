/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  };
}

// const total = (x, y, z) => x + y + z;
// const curriedTotal = curry(total);
// console.log(curriedTotal);
// console.log(curriedTotal(10)(20)(30));
