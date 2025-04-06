import readline from "readline";



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * The askInput function is responsible for prompting the user to enter a number.
 * - If the user enters 'exit', the program will print "Good bye...." and terminate.
 * - If the user enters a valid number, it checks whether the number is prime or not using checkThisIsPrimeOrNot function.
 * - The process continues until the user types 'exit'.
 */
function askInput() {
    rl.question("Enter a number: - ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Good bye....")
            rl.close();
        } else {
            console.log(`The entered number is: ${input}`)
            const number = parseInt(input)
            checkThisIsPrimeOrNot(number)
            askInput()
        }
    })
}



/**
 * The checkThisIsPrimeOrNot function determines if a given number is prime.
 * - A prime number is only divisible by 1 and itself.
 * - The function checks divisibility from 2 to the square root of the number for efficiency.
 * - If the number is divisible by any number in this range, it is not prime.
 * 
 * @param {number} number - The number to be checked for primality.
 */
function checkThisIsPrimeOrNot(number) {
    let count = 0;
    if (number <= 1) {
        console.log(`${number} is not a prime number.`)
        return;
    } else {
        const sqrt = Math.sqrt(number);

        for (let i = 2; i <= sqrt; i++) {
            if (number % i === 0) {
                console.log(`${number} is not a prime number.`);
                return;
            }
        }
    }

    // If no divisors were found, it is prime
    console.log(`${number} is a prime number.`);
}


askInput()