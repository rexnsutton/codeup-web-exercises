var i = 2;
while( i <= 65536){
    console.log(i);
    i = i * 2;
}
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);

// This expression will generate a random number between 1 and 5
    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        console.log(conesSold + ' cones sold...');
        allCones = allCones - conesSold;
        console.log(allCones + ' cones left...')
    } while (allCones >= conesSold && allCones > 0);
    do {
        console.log('Cannot sell you ' + conesSold + ' I only have ' + allCones);
        allCones = allCones - conesSold;
    } while (allCones < conesSold && allCones > 0);
    do {
        console.log('Yay! I sold them all!');
        allCones = allCones - conesSold;
    } while (allCones === 0);










