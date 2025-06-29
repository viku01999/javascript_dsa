import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function askInput() {
    rl.question("Enter a numebr :- ", (input) => {
        const isNegative = input.startsWith("-")
        const rawValue = isNegative ? input.slice(1) : input

        let regex = /^\d+$/

        if (!regex.test(rawValue)) {
            console.log("Please provide a valid number.")
            askInput()
        } else {
            const result = reverseString(rawValue)
            const finalResult = isNegative ? "-" + result : result
            console.log(`Reverse of ${input} is ${finalResult}`)
            askInput()
        }
    })
}



function reverseString(str) {
    let reversed = ""
    let stringArray = str.split("")

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversed += stringArray[i]
    }
    return reversed
}


askInput()