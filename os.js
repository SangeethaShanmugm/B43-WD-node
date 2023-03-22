const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("OS Version", os.version());
console.log("Platform", os.platform());
console.log("Cpus", os.cpus());
//1kb => 1024 bytes -> 1mb -> 1024 kb -> 1gb -> 1024 mb
