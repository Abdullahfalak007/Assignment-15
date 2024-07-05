function getAllPropertyValues(obj) {
  let values = [];
  for (let property in obj) {
    values.push(obj[property]);
  }
  return values;
}

console.log("All property values:", getAllPropertyValues(Array));
