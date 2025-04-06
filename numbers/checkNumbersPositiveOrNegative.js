/*
  This script prompts the user to enter a number and checks whether the number is positive, negative, or zero.
  It also allows the user to exit the program by typing 'exit'.
  The program uses the readline module to interact with the user via the command line.
  
  Key Functions:
    1. askQuestion() - Prompts the user for input, processes the number, and calls checkNumber().
    2. checkNumber(value) - Determines if the number is positive, negative, or zero and prints the result.
    3. The script loops, asking for a number again after processing, until the user types 'exit' to terminate.
*/


import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion() {
    rl.question('Enter a number:-', (input) => {
        if (input.toLocaleLowerCase() === 'exit') {
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
    } else if (value > 0) {
        console.log('The number is positive.');
    } else if (number < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The number is zero.');
    }
}

askQuestion()




// rl.question('Enter a number :- ', (input) => {
//     const number = parseFloat(input)

//     if (isNaN(number)) {
//         console.log('Please enter a number')
//     } else if (number > 0) {
//         console.log('The number is positive')
//     } else if (number < 0) {
//         console.log('The number is negative')
//     } else {
//         console.log('The number is zero')
//     }
//     rl.close()
// })