'use strict'




function showMultiplicationTable(input) {
        for(var i = 1; i <= 10; i++){
            console.log(input + ' X ' + i + ' = ' + (input * i));
        }
}

showMultiplicationTable(7);



for (var i = 1; i <= 10; i++){
    var aRandom = Math.floor(Math.random() * 180) + 20;
    if (aRandom % 2 ===0){
        console.log(aRandom + " Is Even");

    } else if (aRandom % 2 !== 0) {
        console.log(aRandom + " Is ODD");
    }
}


for(var i = 1; i <= 9; i++){
    console.log(String(i).repeat(i));
}



for (var a = 100; a > 4; a -= 5){
    console.log(a);
}

