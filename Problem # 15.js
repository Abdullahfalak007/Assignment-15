function objectToList(obj) {
  return Object.entries(obj);
}

let exampleObject = { name: "John", age: 30, city: "New York" };
console.log("Object to list:", objectToList(exampleObject));
