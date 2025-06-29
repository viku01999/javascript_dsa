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

        const result = findTheFactorialOfNumber(n);
        console.log(`The factorial of ${n} is ${result}`);
        askInput();
    });
}


askInput();

function findTheFactorialOfNumber(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = n; i > 1; i--) {
        factorial = factorial * i;
    }
    return factorial;

}
