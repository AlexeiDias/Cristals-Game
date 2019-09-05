var crystalCount = 0;
var losses = 0;
var wins = 0;
$("#score-count").html("<h2>" + crystalCount + "</h2>");

// computer picks a random number 
//and stores in a variable called randomNum

 var randomNum = Math.floor((Math.random() * 20) + 10);

console.log("randomNum starts with" + " " + randomNum);

//pick a random value for  red crystal and multiply by randomNum
//store red crystal random value in a variable called rendomRed
var randomRed = Math.floor((Math.random() * 10) + 1);

console.log("randomRed starts with" + " " + randomRed);

//when crystal button is clicked, show crystal value
//and add crystal value to crystalCount
$(document).ready(function () {
    $(document).on("click", "#red-crystal", function () {
        $("#red-text").html("<h2>" + randomRed + "</h2>");
        crystalCount = randomRed + crystalCount
        $("#score-count").html("<h2>" + crystalCount + "</h2>");

        if (crystalCount > randomNum) {
           
            losses++;
            $("#losses-text").html("<h2>" + losses + "</h2>");
            console.log("losses count" + " " + losses);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);
            
        }
        if (crystalCount === randomNum) {
            
            wins++;
            $("#win-text").html("<h2>" + wins + "</h2>");
            console.log("losses count" + " " + wins);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);
        }
        
    })

})






//if crystalCount < randomNum
// totalCrystalCount = crystalCount + crystalCount 

// if totalCrystalCount == randomNum
    //win++
    //reset randomNum
    //reset crystalCount
    //reset randomRed