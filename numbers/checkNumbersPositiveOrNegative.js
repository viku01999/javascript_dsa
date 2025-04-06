import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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
    } else if (value < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The number is zero.');
    }
}

askQuestion()