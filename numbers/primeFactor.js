import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askInput() {
    rl.question("Enter a number to find its prime factors: ", (input) => {
        const n = parseInt(input);

        if (isNaN(n)) {
            console.log("Please enter a valid positive integer.");
            return askInput();
        }
        if (n <= 0) {
            console.log("Please enter a positive integer greater than zero.");
            return askInput();
        }

        if (n === 1) {
            console.log("1 has no prime factors.");
            return askInput();
        }

        primeFactors(n);
        askInput();
    });
}

askInput();

function primeFactors(n) {
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }

    let i = 3;
    while (i <= Math.sqrt(n)) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
        i += 2;
    }

    if (n > 2) {
        console.log(n);
    }
}
