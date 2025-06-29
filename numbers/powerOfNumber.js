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

        const result = findThePowerOfNumber(n);
        console.log(`The power of ${n} is: ${result}`);
        askInput();
    });
}


askInput();


function findThePowerOfNumber(n) {
    let power = 1;
    for (let i = 1; i <= n; i++) {
        power *= 2;
    }
    return power;
}