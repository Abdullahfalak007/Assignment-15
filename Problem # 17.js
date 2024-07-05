function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

let exampleObject = { name: "John", age: 30, city: "New York" };
console.log("Object has 'age' property:", hasProperty(exampleObject, "age"));
console.log(
  "Object has 'gender' property:",
  hasProperty(exampleObject, "gender")
);
