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

        const result = printFibonacciSeries(n);
        console.log(`Fibonacci series up to ${n} terms: ${result}`);
        askInput();
    });
}


askInput();


function printFibonacciSeries(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, c;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}