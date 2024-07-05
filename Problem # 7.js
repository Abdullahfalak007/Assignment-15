function generateSubsets(str) {
  let subsets = [];
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subsets.push(str.slice(i, j));
    }
  }
  return subsets;
}

let sampleData = "dog";
console.log("Subsets:", generateSubsets(sampleData));
