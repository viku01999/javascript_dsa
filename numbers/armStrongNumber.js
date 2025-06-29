import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function askiInput() {
    rl.question("Enter a numebr:- ", (input) => {
        const number = parseInt(input);
        if (isNaN(number)) {
            console.log("Please enter a valid number");
            askiInput();
        } else {
            const positiveNumber = Math.abs(number);
            const result = isArmstrong(positiveNumber);
            if (result) {
                console.log(`${number} is an Armstrong number`);
            }
            else {
                console.log(`${number} is not an Armstrong number`);
            }
            askiInput();
        }
    })
}

askiInput();







function countNumbers(number) {
    let count = 0;
    while (number > 0) {
        count++;
        number = Math.floor(number / 10)
    }
    console.log("Total count is :- ", count);
    return count;
}


function multiplicationOfNumber(num, count) {
    let result = 1;
    for (let i = 1; i <= count; i++) {
        result = result * num;
    }
    console.log(`Multiplication of ${num} after ${count} times is :- `, result);
    return result;
}


function isArmstrong(number) {
    const count = countNumbers(number);
    let sum = 0;

    let temp = number;

    while (temp > 0) {
        const remainder = temp % 10;
        const afterMultiply = multiplicationOfNumber(remainder, count);
        sum = sum + afterMultiply;
        temp = Math.floor(temp / 10);
    }
    console.log("Sum is :- ", sum);

    return sum === number;
}