export function minBy(array, cb) {
  let result = undefined;
  let value = 999;
  for (let element of array) {
    if (element.age < value) {
      result = element;
      value = element.age;
    }
  }
  return result;
}

export function maxBy(array, cb) {
  let result = undefined;
  let value = 0;
  for (let element of array) {
    if (element.age > value) {
      result = element;
      value = element.age;
    }
  }
  return result;
}
