import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/**
 * The askQuestion function prompts the user to enter two numbers.
 * It validates the user input to ensure that both numbers are valid (numeric).
 * If the user enters an invalid number (e.g., a non-numeric value), the function will ask for input again.
 * Once valid numbers are entered, it calls the checkFirstNumberIsGreaterThanOrEqual function to compare the numbers.
 * 
 * The process works recursively: after processing the input, it will prompt the user for new numbers.
 */
function askQuestion() {
    rl.question('Enter the first number:- ', (fInput) => {
        rl.question('Enter the second number:- ', (sInput) => {
            const first = parseFloat(fInput)
            const second = parseFloat(sInput)
            if (isNaN(first) || isNaN(second)) {
                console.log('Please enter valid numbers')
                askQuestion()
            } else {
                checkFirstNumberIsGreaterThanOrEqual(first, second)
                askQuestion()
            }
        })
    })
}




/**
 * The checkFirstNumberIsGreaterThanOrEqual function compares two numbers to determine which one is greater,
 * or if they are equal.
 * 
 * It follows this logic:
 * 1. If the first number is greater than the second, it prints that the first number is greater.
 * 2. If the second number is greater than the first, it prints that the second number is greater.
 * 3. If both numbers are equal, it prints that they are equal.
 * 
 * @param {number} first - The first number provided by the user
 * @param {number} second - The second number provided by the user
 */
function checkFirstNumberIsGreaterThanOrEqual(first, second) {
    if (first > second) {
        console.log(`${first} is greater than or equal to ${second}`)
    } else if (second > first) {
        console.log(`${second} is greater than or equal to ${first}`)
    } else {
        console.log(`${first} and ${second} are equal`)
    }
}


askQuestion()