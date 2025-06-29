import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askiInput() {
    rl.question("Enter the first number: ", (fInput) => {
        const firstNumber = parseInt(fInput);

        if (isNaN(firstNumber)) {
            console.log("Please enter a valid number.");
            return askiInput(); 
        }

        rl.question("Enter the second number: ", (sInput) => {
            const secondNumber = parseInt(sInput);

            if (isNaN(secondNumber)) {
                console.log("Please enter a valid number.");
                return askiInput();
            }

            const firstPositiveNumber = Math.abs(firstNumber);
            const secondPositiveNumber = Math.abs(secondNumber);

            if (firstPositiveNumber >= secondPositiveNumber) {
                console.log("First number should be less than second number.");
                return askiInput();
            }

            printArmStringNumber(firstPositiveNumber, secondPositiveNumber);
            askiInput();
        });
    });
}

askiInput();



const printArmStringNumber = (lowerRange, uppreRange) => {
    for (let i = lowerRange; i <= uppreRange; i++) {
        const result = isArmstrong(i)
        if (result) {
            console.log(`${i} is an Armstrong number`);
        }
        else {
            console.log(`${i} is not an Armstrong number`);
        }
    }
}






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