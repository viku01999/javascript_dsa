import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/**
 * The askQuestion function prompts the user to enter three numbers and then calls
 * the checkFirstNumberIsGreaterThanOrEqual function to determine which number is the greatest
 * or if they are equal. The function performs input validation, ensuring that the user enters valid numbers.
 * If the user enters invalid input (e.g., non-numeric input), it will prompt the user again.
 * 
 * The process works in a recursive manner, asking for inputs repeatedly until valid numbers are provided.
 */
function askQuestion() {
    rl.question('Enter the first number:- ', (fInput) => {
        rl.question('Enter the second number:- ', (sInput) => {
            rl.question('Enter the third number:- ', (tInput) => {
                const first = parseFloat(fInput)
                const second = parseFloat(sInput)
                const third = parseFloat(tInput)
                if (isNaN(first) || isNaN(second) || isNaN(third)) {
                    console.log('Please enter valid numbers')
                    askQuestion()
                } else {
                    checkFirstNumberIsGreaterThanOrEqual(first, second, third)
                    askQuestion()
                }
            })
        })
    })
}




/**
 * The checkFirstNumberIsGreaterThanOrEqual function compares the three provided numbers
 * to determine which one is the greatest or if all of them are equal.
 * 
 * It follows the following logic:
 * 1. If all numbers are equal, it outputs a message indicating equality.
 * 2. If the first number is greater than or equal to the others, it outputs that the first number is the greatest.
 * 3. If the second number is the greatest, it outputs that.
 * 4. If the third number is the greatest, it outputs that.
 * 
 * @param {number} first - The first number provided by the user
 * @param {number} second - The second number provided by the user
 * @param {number} third - The third number provided by the user
 * 
 * @returns {number} - The greatest number or the number that is equal to others.
 */
function checkFirstNumberIsGreaterThanOrEqual(first, second, third) {
    let greatestNumber = 0;

    if (first === second && first === third) {
        greatestNumber = first;
        console.log(`${first}, ${second}, and ${third} are equal.`);
    } 

    else if (first >= second && first >= third) {
        greatestNumber = first;
        console.log(`${first} is greater than or equal to ${second} and ${third}.`);
    } 

    else if (second >= first && second >= third) {
        greatestNumber = second;
        console.log(`${second} is greater than or equal to ${first} and ${third}.`);
    }

    else if (third >= first && third >= second) {
        greatestNumber = third;
        console.log(`${third} is greater than or equal to ${first} and ${second}.`);
    }

    return greatestNumber;
}


askQuestion()