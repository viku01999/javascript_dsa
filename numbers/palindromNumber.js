import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askInput() {
    rl.question("Enter a number: - ", (input) => {
        const isNegative = input.startsWith("-")
        const rawValue = isNegative ? input.slice(1) : input

        let regex = /^\d+$/

        if (!regex.test(rawValue)) {
            console.log("Please provide a valid number.")
            askInput()
        } else {
            const result = isPalindrome(rawValue)
            if (result) {
                console.log(`${input} is a palindrome number.`)
            } else {
                console.log(`${input} is not a palindrome number.`)
            }
            askInput()
        }
    })
}


function isPalindrome(str) {
    let reversed = ""
    let stringArray = str.split("")

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversed += stringArray[i]
    }
    return str === reversed
}

askInput()
