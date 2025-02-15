var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function displayReadingStatus(library) {
  library.forEach((book) => {
    console.log("Book:", book.title);
    console.log("Author:", book.author);
    console.log(
      "Reading Status:",
      book.readingStatus ? "Already read" : "Not read yet"
    );
    console.log("---------------------------");
  });
}

displayReadingStatus(library);
