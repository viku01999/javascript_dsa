import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askForInput() {
    rl.question("Enter the starting number: - ", (startFrom) => {
        rl.question("Enter the ending number: ", (endTo) => {
            const first = parseInt(startFrom)
            const second = parseInt(endTo)
            if (isNaN(first) || isNaN(second) || first > second) {
                console.log("Please enter valid numbers.")
                askForInput()
            } else {
                checkAllPrimeNUmbersBteweenRagne(first, second)
                askForInput()
            }
        })
    })
}


function checkAllPrimeNUmbersBteweenRagne(startFrom, endTo) {
    const startRange = startFrom
    const endRange = endTo

    for (let i = startRange; i <= endRange; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}


function isPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}



askForInput()