function swapKeysAndValues(obj) {
  let swappedObj = {};
  for (let key in obj) {
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
}

let exampleObject = { name: "John", age: 30, city: "New York" };
console.log("Swapped keys and values:", swapKeysAndValues(exampleObject));
