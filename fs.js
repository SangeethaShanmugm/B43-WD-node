const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart 🥳🥳";

// fs.writeFile("./awesome.txt", quote, (err) => {
//   console.log("Completed writing");
// });

const quote2 = "Live more, worry Less 🥳🥳";

//Task 1 - 10:15
//Create the below files with quote2 as the content
//  /backup/
// text-1.html
// text-2.html
// text-3.html
// .....
// text-10.html

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed writing text-${i}.html`);
  });
}

//Task-2
// node fs.js 20 -> 20 files to be created | note-1.html...note-20.html
