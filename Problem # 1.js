var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function listObjectProperties(obj) {
  return Object.keys(obj).join(",");
}

console.log(listObjectProperties(student));
