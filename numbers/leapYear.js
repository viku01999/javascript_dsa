import readline from "readline";



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * The askQuestion function is responsible for prompting the user to enter a number.
 * - It first asks the user to enter a number.
 * - If the user types 'exit', the program will print "Good bye...." and close the readline interface.
 * - If a valid number is entered, it will call the `checkThisIsLeapYearOrNot` function to check if the number corresponds to a leap year.
 * - After each check, it will prompt the user again for a new number.
 * 
 * This function ensures that the user can continuously check leap years for different numbers, or exit the program by typing 'exit'.
 */
function askQuestion() {
    rl.question("Enter a number: - ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Good bye....")
            rl.close();
        } else {
            console.log(`The entered number is: ${input}`)
            const number = parseInt(input)
            checkThisIsLeapYearOrNot(number)
            askQuestion()
        }
    })
}


/**
 * The checkThisIsLeapYearOrNot function determines if a given year (number) is a leap year or not.
 * - A year is a leap year if:
 *    1. It is divisible by 4, but not divisible by 100.
 *    2. OR, it is divisible by 400.
 * 
 * The function checks if the entered number is a valid number.
 * - If the input is not a valid number, it will display a message asking for a valid number.
 * - If the input is a valid year, it checks the conditions for leap year.
 *    - If the year satisfies the leap year conditions, it will print that the year is a leap year.
 *    - Otherwise, it will print that the year is not a leap year.
 * 
 * @param {number} number - The year to be checked.
 */
function checkThisIsLeapYearOrNot(number) {
    if (isNaN(number)) {
        console.log("Please enter a valid number.")
    } else if ((number % 4 === 0 && number % 100 !== 0) || (number % 400 === 0 && number % 100 === 0)) {
        console.log(`${number} is a leap year.`)
    } else {
        console.log(`${number} is not a leap year.`)
    }
}


askQuestion()