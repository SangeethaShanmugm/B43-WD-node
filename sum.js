console.log("Hello 🌍");

//console.log(document)
//console.log(window);

//console.log(global);

//console.log(process.argv, process.argv[2]);

//destructure

const double = (num) => num * 2;

const [, , n] = process.argv;

//console.log(double(n));

const add = (n1, n2) => n1 + n2;

const [, , n1, n2] = process.argv;

console.log(process.argv);
console.log(add(+n1, +n2));
