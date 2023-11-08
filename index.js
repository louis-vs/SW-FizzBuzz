for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
        output += "Fizz";
    } 

    if (i % 13 === 0) {
        output += "Fezz"
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    if (i % 7 === 0) {
        output += "Bang";
    }

    if (i % 11 === 0) {
        output = "Bong";
    }


    if (output === "") {
        output = String(i);
    }

    console.log(output);
}
