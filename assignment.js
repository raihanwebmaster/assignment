// work1
function feetToMile (feet){
    var mile = feet/5280;
    mile = mile.toFixed(1);
    return mile;
}
var findMile = feetToMile(10560);
console.log(findMile);
var bigMile = feetToMile(44240);
console.log(bigMile);
// work2
function woodCalculator (chair, tabile, bed){
    var totalCount = (chair*1 + tabile*3 + bed*5);
    return totalCount;
}
var house = woodCalculator (4, 5, 7);
console.log(house);
// work 3
    function brickCaculator(floor){
        if(floor <= 10){
        var totalBricks = floor*15000;
            return totalBricks;
        }
        else if(floor > 10 && floor <= 20){
        var  extraFloor = floor-10;
        var  highBricks = extraFloor*12000;
           highBuildingTotal = highBricks + 150000;
           return highBuildingTotal;
        }
        else if(floor > 20){
        var topFloor = floor-20;
        var topBricks = topFloor*10000;
            topBuildingTotal = topBricks + 270000;
            return topBuildingTotal;
        }
}
    bricksTotal = brickCaculator(24);
    console.log(bricksTotal);

// works 4
 function tinyFriend(friends){
     var lowestName = friends[0];
     for( var i= 0; i<friends.length; i++){
         var element = friends[i];
         if(element.length>friends.length){
             lowestName= element;
         }
     }
     return lowestName;
 }
var highestName = tinyFriend(["raihan","omi","emon","rashed","muntaha Naz"]);
console.log(highestName);


