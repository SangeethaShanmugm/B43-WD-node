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

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

//Task-2
// node fs.js 20 -> 20 files to be created | note-1.html...note-20.html
const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.csv`, quote2, (err) => {
//     console.log(`Completed writing note-${i}.csv`);
//   });
// }

// fs.readFile("./awesome.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

const niceQuote = "\nMake every day a little less ordinarily";

fs.appendFile("./nice.txt", niceQuote, (err) => {
  console.log("Completed writing nice.txt");
});

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted Successfully");
// });

fs.readdir("./backup", (err, files) => {
  console.log("All file names:", files);
});

//Delete all files in ./backup folder

fs.readdir("./backup", (err, data) => {
  data.forEach((fileName) => {
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log(`deleted file names:${fileName}`);
    });
  });
});

// fs.writeFile,fs.readFile,fs.appendFile - async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync -sync

for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFileSync(`./backup/text-${i}.html`, quote2);
  console.log("Completed writing", i);
}
