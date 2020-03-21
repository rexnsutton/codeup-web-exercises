"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// confirm('Would you like to enter a number?');
// var enterNumber = prompt('Enter number');
// enterNumber = parseInt(enterNumber);

// function yourNumber(number) {
//     confirm('Would you like to enter a number?');
//
//     var number = prompt('Enter your number: ');
//     number = parseInt(number);
//     if (number % 2 === 0) {
//         alert('Your number is even!');
//     } else if (number % 2 === 1) {
//         alert('Your number is odd!');
//     }
//     alert('Your number plus 100 is: ' + (number + 100));
//     if (number < 0) {
//         alert('Your number number is negative!')
//     } else if (number > 0) {
//         alert('Your number is positive!');
//     }
// }
// yourNumber();



// confirm('Do you want to enter a number?');2/ /,m
// var enterNumber = prompt('Enter your number: ');
//     enterNumber = parseInt(enterNumber);
// if (enterNumber % 2 === 0) {
//     alert( 'this number is even')
// } else if (enterNumber % 2 === 1){
//     alert('this number is odd')
//
// }
//
// alert ('your number + 100 = ' + (enterNumber + 100));
//
// if (enterNumber < 0){
//     alert('this number is negative')
// } else if (enterNumber > 0){
//     alert('this number is positive')
// }








/* ######################################################################### */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//
// //
// function analyzeColor (colorName){
//
//     if (colorName === 'blue') {
//         console.log('blue is the color of the sky');
//     } else if (colorName === 'red'){
//         console.log('Strawberries are red');
//     } else if (colorName === 'cyan'){
//         console.log('i dont know anything about cyan');
//     } else {
//         console.log('color is not defined');
//     }
//
// }
// analyzeColor("blue");
// analyzeColor("red");
// analyzeColor("cyan");
// analyzeColor("grey");
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//
// var colorName = prompt('what color?');
// switch (colorName){
//     case 'blue':
//         console.log('blue is the color of the sky');
//         break;
//     case 'red':
//         console.log('strawberries are red');
//         break;
//     case 'cyan':
//         console.log('I know nothing about cyan');
//         break;
//     default:
//         console.log('Unknown color');
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount){
//     if (luckyNumber === 0){
//         return totalAmount
//     } else if (luckyNumber === 1){
//         return totalAmount - totalAmount * .10;
//     } else if (luckyNumber === 2) {
//         return totalAmount - totalAmount * .25;
//     }else if (luckyNumber === 3){
//         return totalAmount - totalAmount * .35;
//     } else if(luckyNumber === 4){
//         return totalAmount - totalAmount * .50;
//     } else if(luckyNumber === 5){
//         return totalAmount - totalAmount;
//     }
// }
// console.log('your total is: ' + calculateTotal(0, 100));
// console.log('your total is: ' + calculateTotal(4, 100));
// console.log('your total is: ' + calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//
// Generate a random number between 0 and 6


function calculateTotal(luckyNumber, totalAmount){
    var luckyNumber = Math.floor(Math.random() * 6);
    totalAmount = prompt('what is your total bill?');
    totalAmount = parseInt(totalAmount);
    if (luckyNumber === 0){
        alert('your lucky number was 0');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + totalAmount);
    } else if (luckyNumber === 1){
        alert('Your lucky number was 1');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + (totalAmount - (totalAmount * .10)));

    } else if (luckyNumber === 2) {
        alert('your lucky number was 2');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + (totalAmount - (totalAmount * .25)));
    }else if (luckyNumber === 3){
        alert('your lucky number was 3');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + (totalAmount - (totalAmount * .35)));
    } else if(luckyNumber === 4){
        alert('your lucky number was 4');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + (totalAmount - (totalAmount * .50)));
    } else if(luckyNumber === 5){
        alert('your lucky number was 5');
        alert('your total before discount ' + totalAmount);
        alert('total after discount ' + totalAmount - totalAmount);
    }
}
calculateTotal();