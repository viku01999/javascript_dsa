import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter the number of terms: ", (input) => {
        const n = parseInt(input);

        if (isNaN(n) || n <= 0) {
            console.log("Please enter a valid positive integer.");
            return askInput();
        }

        printFibonacciSeries(n);
        askInput();
    });
}


askInput();


function printFibonacciSeries(n) {
    let a = 0, b = 1

    for (let i = 0; i < n; i++) {
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
        console.log(nextTerm)
    }
}