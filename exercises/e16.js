// see e16.md

export function find(array, callback) {
  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    if (callback(element)) {
      return element;
      break;
    }
  }
}
