import readline from "readline"



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



/**
 * The askInput function prompts the user to enter two values:
 * 1. The number of natural numbers to sum.
 * 2. The starting number for the summation.
 * 
 * It validates the user input to ensure that both inputs are valid numbers. If the user enters invalid values (e.g., non-numeric values), 
 * the function will ask the user to enter the values again.
 * Once valid inputs are entered, it calls the calculateSumOfNaturalNumbers function to compute and display the result.
 * 
 * The process will repeat if the user provides invalid inputs, ensuring that the program only proceeds when valid data is provided.
 */
function askInput() {
    rl.question("Enter the number of natural numbers:-  ", (numOfNaturals) => {
        rl.question("Enter the starting number:- ", (startingNumber) => {
            const totalNumber = parseInt(numOfNaturals)
            const start = parseInt(startingNumber)
            if (isNaN(totalNumber) || isNaN(start)) {
                console.log("Please enter valid numbers.")
                askInput()
            } else {
                calculateSumOfNaturalNumbers(totalNumber, start)
                rl.close()
            }
        })
    });
}


/**
 * The calculateSumOfNaturalNumbers function calculates the sum of the first `totalNumber` natural numbers starting from `start`.
 * It performs the following:
 * 1. It initializes a variable `sum` to 0.
 * 2. It uses a `for` loop to iterate over the range from `start` to `start + totalNumber` (exclusive).
 * 3. In each iteration, it adds the current number to the sum.
 * 4. Finally, it prints the result, showing the sum of the natural numbers.
 * 
 * @param {number} totalNumber - The total number of natural numbers to sum.
 * @param {number} start - The starting number for the summation.
 */
function calculateSumOfNaturalNumbers(totalNumber, start) {
    let sum = 0;

    for (let i = start; i < start + totalNumber; i++) {
        sum += i;
    }
    console.log(`The sum of the first ${totalNumber} natural numbers starting from ${start} is: ${sum}`);
}




askInput()