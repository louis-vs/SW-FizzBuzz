for (let i = 1; i <= 100; i++) {
    let output = [];
    if (i % 3 === 0) {
        output.push("Fizz");
    } 

    if (i % 5 === 0) {
        output.push("Buzz");
    }

    if (i % 7 === 0) {
        output.push("Bang");
    }

    if (i % 11 === 0) {
        output = ["Bong"];
    }

    if (i % 13 === 0) {
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
