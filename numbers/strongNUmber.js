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

        const result = isStrongNumber(n);
        if (result) {
            console.log(`${n} is a strong number.`);
        } else {
            console.log(`${n} is not a strong number.`);
        }
        askInput();
    });
}


askInput();



function isStrongNumber(n) {
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        const fact = calculateFatcorialOfNumber(digit);
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    return sum === n;
}


function calculateFatcorialOfNumber(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}