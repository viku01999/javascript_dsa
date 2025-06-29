import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askInput() {
    rl.question("Enter a number: - ", (input) => {
        const value = parseInt(input)
        if (isNaN(value)) {
            console.log("Please provide a number.")
            askInput()
        } else {
            //convert negation number into positive 
            const positiveValue = Math.abs(value)
            const sum = calculateSumOfDigits(positiveValue)
            console.log(`Sum of digits of ${positiveValue} is ${sum}`)
            askInput()
        }
    })
}



const calculateSumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += (num % 10)
        num = Math.floor(num / 10)
    }
    return sum
}


askInput()