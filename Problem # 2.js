var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function deleteObjectProperty(obj, prop) {
  console.log("Object before deletion:", obj);
  delete obj[prop];
  console.log("Object after deletion:", obj);
}

deleteObjectProperty(student, "rollno");
