function getAllProperties(obj) {
  let properties = [];
  for (let property in obj) {
    properties.push(property);
  }
  return properties;
}

console.log("All properties:", getAllProperties(Array));
