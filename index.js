let readline = require('readline-sync');
let username = readline.question('Welcome to the simple JavaScript calculator. What\'s your name? ');
let operations = ['+', '-', '/', '*'];

function askOperation() {
    let operator = readline.question(`OK, ${username}, which operator do you want to use?`
    + '\n Addition (+)' 
    + '\n Subtraction (-)'
    + '\n Division (/)'
    + '\n Multiplication (*)'
    + '\n Operator: ');

    if (!operations.includes(operator)) {
        console.log('You have entered an invalid operator, try again');
        askOperation();
    };

    switch(operator) {
        case '+': 
            console.log(`You have selected the operator ${operations[0]}!`);
            break;
        case '-': 
            console.log(`You have selected the operator ${operations[1]}!`);
            break;
        case '/': 
            console.log(`You have selected the operator ${operations[2]}!`);
            break;
        case '*': 
            console.log(`You have selected the operator ${operations[3]}!`);
            break;
    };

    let firstNum = readline.questionInt('Enter the first number: ');
    let secondNum = readline.questionInt('Enter the second number: ');

    switch(operator) {
        case '+': 
            console.log(firstNum + ' ' + operator + ' ' + secondNum + ' = ' + (firstNum + secondNum));
            break;
        case '-': 
            console.log(firstNum + ' ' + operator + ' ' + secondNum + ' = ' + (firstNum - secondNum));
            break;
        case '/': 
            console.log(firstNum + ' ' + operator + ' ' + secondNum + ' = ' + (firstNum / secondNum));
            break;
        case '*': 
            console.log(firstNum + ' ' + operator + ' ' + secondNum + ' = ' + (firstNum * secondNum));
            break;
        default:
            console.log('Something went wrong');
    };
}

askOperation();