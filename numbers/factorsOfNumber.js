import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter the number of terms: ", (input) => {
        const n = parseInt(input);

        if (isNaN(n)) {
            console.log("Please enter a valid positive integer.");
            return askInput();
        }
        if (n < 0) {
            console.log("Please enter a positive integer.");
            return askInput();
        }
        if (n === 0) {
            console.log("The factor of 0 is 1");
            return askInput();
        }
        if (n === 1) {
            console.log("The factor of 1 is 1");
            return askInput();
        }
        printFactorOfNumber(n);
        askInput();
    });
}


askInput();


function printFactorOfNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(`The factor of ${n} is ${i}`);
        }
    }
}