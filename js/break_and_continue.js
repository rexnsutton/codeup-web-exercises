
for (var i = 1; i < 50; i++) {
    var userInput = prompt('Enter an odd number between 1-50 please: ');
    userInput = parseInt(userInput);
    if (userInput % 2 !== 0) {
        console.log('Number to skip is: ' + userInput);
        break;
    }
}
for (var i = 1; i < 50; i +=2 ) {
    if (i === userInput) {
        console.log('Yikes! Skipping number: ' + i);
        continue;
    }
    console.log('Here is an odd number: ' + i);
}








