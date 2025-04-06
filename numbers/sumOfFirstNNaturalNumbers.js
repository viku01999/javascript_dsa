import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askForNaturalNumbers() {
    rl.question("Please enter a number: - ", (input) => {
        if (input.toLocaleLowerCase() === 'exit') {
            console.log("Good bye . . . ")
            rl.close();
        } else {
            const number = parseFloat(input)
            calculateTheSumOfFirstNaturalsNumbers(number)
            askForNaturalNumbers()
        }
    })
}


function calculateTheSumOfFirstNaturalsNumbers(number) {
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            console.log(i)
            sum = sum + i;
        }
        console.log(`The sum of the first ${number} natural numbers is: ${sum}`);
    }
}


askForNaturalNumbers()