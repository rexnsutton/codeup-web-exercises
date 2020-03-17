console.log("Hello from external JavaScript.");

//alert('"Welcome to my Website!".');

//var favColor = prompt('What is your favorite color:');

//alert (favColor + ' is mine too!!');

var x = 3;
var lm = prompt('How many days do you want to rent The little Mermaid? ');
var bb = prompt('How many days do you want to rent Brother bear? ');
var hh = prompt('How many days do you want to rent Hercules? ');
var rentalTotal = (
    parseInt(lm) +
    parseInt(bb) +
    parseInt(hh)) * 3;
console.log('Total rental: $' + rentalTotal);




var google = prompt('what is your rate for google?');
google = parseInt(google);

var facebook = prompt('What is your rate for facebook?');
facebook = parseInt(facebook);

var amazon = prompt('What is your rate for Amazon?');
amazon = parseInt(amazon);


var googleHours = prompt('How many hours did you work at google?');
googleHours = parseInt(googleHours);

var facebookHours = prompt('How many hours did you work at facebook?');
facebookHours = parseInt(facebookHours);

var amazonHours = prompt('How many hours did you work at amazon?');
amazonHours = parseInt(amazonHours);
var totalDollars = (google * googleHours) + (facebook * facebookHours) + (amazon * amazonHours);
console.log(totalDollars);

var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict);
alert('student can attend class' + canAttendClass);













