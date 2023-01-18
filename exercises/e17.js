export function minBy(array, cb) {
  let result = undefined;
  let value = 999;
  for (let element of array) {
    if (cb(element) < value) {
      result = element;
      value = cb(element);
    }
  }
  return result;
}

export function maxBy(array, cb) {
  let result = undefined;
  let value = 0;
  for (let element of array) {
    if (cb(element) > value) {
      result = element;
      value = cb(element);
    }
  }
  return result;
}
