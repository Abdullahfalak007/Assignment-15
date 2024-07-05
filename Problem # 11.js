function printObjectMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}

console.log(printObjectMethods(Array));
