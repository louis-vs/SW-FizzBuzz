const prompt = require("prompt-sync")({sigint: true});

const fizzFlag = "-f";
const buzzFlag = "-b";
const fezzFlag = "-e";

let fizzNumber = 3;
let buzzNumber = 5;
let fezzNumber = 13;

const printUsage = () => {
    console.log(`Usage: node index.js [${fizzFlag} fizzNumber] [${buzzFlag} buzzNumber] [${fezzFlag} fezzNumber]`);
};

const failParse = () => {
    printUsage();
    process.exit(1);
}

const parseParam = (flag, arg) => {
    if (isNaN(Number(arg))) {
        failParse();
    }

    if (flag === "-f") {
        fizzNumber = Number(arg);
    } else if (flag === "-b") {
        buzzNumber = Number(arg);
    } else if (flag === "-e") {
        fezzNumber = Number(arg);
    } else {
        failParse();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

if (process.argv.length > 2) {
    if (process.argv.length % 2 != 0) {
        failParse();
    }
    for (let i = 2; i < process.argv.length - 1; i += 2) {
        parseParam(process.argv[i], process.argv[i + 1]);
    }
}

let maximumNumber = undefined;
while (isNaN(Number(maximumNumber)) || maximumNumber <= 0) {
    maximumNumber = prompt("What number should I go up to? ");
}

for (let i = 1; i <= maximumNumber; i++) {
    let output = [];
    if (i % fizzNumber === 0) {
        output.push("Fizz");
    } 

    if (i % buzzNumber === 0) {
        output.push("Buzz");
    }

    if (i % 7 === 0) {
        output.push("Bang");
    }

    if (i % 11 === 0) {
        output = ["Bong"];
    }

    if (i % fezzNumber === 0) {
        let bIndex = output.findIndex((element) => element[0] === "B");
        if (bIndex === -1) {
            bIndex = output.length;
        }
        output.splice(bIndex, 0, "Fezz");
    }

    if (i % 17 === 0) {
        output.reverse();
    }

    if (output.length === 0) {
        output.push(String(i));
    }

    console.log(output.join(""));
}
