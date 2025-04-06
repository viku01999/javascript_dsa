/*
  This script prompts the user to enter a number and checks whether the number is even or odd.
  It also allows the user to exit the program by typing 'exit'.
  The program uses the readline module to interact with the user via the command line.
  
  Key Functions:
    1. askQuestion() - Prompts the user for input, processes the number, and calls checkNumber() to determine if it's even or odd.
    2. checkNumber(value) - Determines if the number is even or odd and prints the result.
    3. The script loops, asking for a number again after processing, until the user types 'exit' to terminate.
*/


import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askQuestion() {
    rl.question('Enter a number:- ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Good bye....')
            rl.close();
        } else {
            console.log(`The entered number is: ${input}`)
            const value = parseFloat(input)
            checkNumber(value)
            askQuestion()
        }
    })
}


function checkNumber(value) {
    if (isNaN(value)) {
        console.log('Please enter a valid number.');
    } else if (value % 2 === 0) {
        console.log('The number is even.');
    } else {
        console.log('The number is odd.');
    }
}


askQuestion()