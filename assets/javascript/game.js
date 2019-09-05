var crystalCount = 0;
var losses = 0;
var wins = 0;
$("#score-count").html("<h2>" + crystalCount + "</h2>");

// computer picks a random number 
//and stores in a variable called randomNum

 var randomNum = Math.floor((Math.random() * 20) + 10);
 $("#randomNum").html("<h2>" + randomNum + "</h2>");

console.log("randomNum starts with" + " " + randomNum);

//pick a random value for  red crystal and multiply by randomNum
//store red crystal random value in a variable called rendomRed
var randomRed = Math.floor((Math.random() * 10) + 1);

console.log("randomRed starts with" + " " + randomRed);

//pick a random value for  Blue crystal and multiply by randomNum
//store BLue crystal random value in a variable called rendomBlue
var randomBlue = Math.floor((Math.random() * 10) + 1);

console.log("randomBlue starts with" + " " + randomBlue);

//pick a random value for  Yellow crystal and multiply by randomNum
//store Yellow crystal random value in a variable called rendomYellow
var randomYellow = Math.floor((Math.random() * 10) + 1);

console.log("randomYellow starts with" + " " + randomYellow);

//pick a random value for  Greem crystal and multiply by randomNum
//store Green crystal random value in a variable called rendomGreen
var randomGreen = Math.floor((Math.random() * 10) + 1);

console.log("randomGreen starts with" + " " + randomGreen);

//when crystal button is clicked, show crystal value
//and add crystal value to crystalCount
$(document).ready(function () {
    
    $(document).on("click", "#red-crystal", function () {
        crystalCount = randomRed + crystalCount
        $("#score-count").html("<h2>" + crystalCount + "</h2>");

        if (crystalCount > randomNum) {
           
            losses++;
            $("#losses-text").html("<h2>" + losses + "</h2>");
            console.log("losses count" + " " + losses);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
            
        }
        if (crystalCount === randomNum) {
            
            wins++;
            $("#win-text").html("<h2>" + wins + "</h2>");
            console.log("wins count" + " " + wins);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
        }
        
    })

    $(document).on("click", "#blue-crystal", function () {
        crystalCount = randomBlue + crystalCount
        $("#score-count").html("<h2>" + crystalCount + "</h2>");

        if (crystalCount > randomNum) {
           
            losses++;
            $("#losses-text").html("<h2>" + losses + "</h2>");
            console.log("losses count" + " " + losses);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
            
        }
        if (crystalCount === randomNum) {
            
            wins++;
            $("#win-text").html("<h2>" + wins + "</h2>");
            console.log("wins count" + " " + wins);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
        }
        
    })

    $(document).on("click", "#yellow-crystal", function () {
        crystalCount = randomYellow + crystalCount
        $("#score-count").html("<h2>" + crystalCount + "</h2>");

        if (crystalCount > randomNum) {
           
            losses++;
            $("#losses-text").html("<h2>" + losses + "</h2>");
            console.log("losses count" + " " + losses);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
            
        }
        if (crystalCount === randomNum) {
            
            wins++;
            $("#win-text").html("<h2>" + wins + "</h2>");
            console.log("wins count" + " " + wins);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
        }
        
    })

    $(document).on("click", "#green-crystal", function () {
        crystalCount = randomGreen + crystalCount
        $("#score-count").html("<h2>" + crystalCount + "</h2>");

        if (crystalCount > randomNum) {
           
            losses++;
            $("#losses-text").html("<h2>" + losses + "</h2>");
            console.log("losses count" + " " + losses);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
            
        }
        if (crystalCount === randomNum) {
            
            wins++;
            $("#win-text").html("<h2>" + wins + "</h2>");
            console.log("wins count" + " " + wins);

            crystalCount = 0;
            $("#score-count").html("<h2>" + crystalCount + "</h2>");

            randomNum = Math.floor((Math.random() * 20) + 10);
            $("#randomNum").html("<h2>" + randomNum + "</h2>");
            console.log("new randomNum now is" + " " + randomNum);
            
            randomRed = Math.floor((Math.random() * 10) + 1);
            console.log("new randomRed now is" + " " + randomRed);

            randomBlue = Math.floor((Math.random() * 10) + 1);
            console.log("new randomBlue now is" + " " + randomBlue);

            randomYellow = Math.floor((Math.random() * 10) + 1);
            console.log("new randomYellow now is" + " " + randomYellow);

            randomGreen = Math.floor((Math.random() * 10) + 1);
            console.log("new randomGreen now is" + " " + randomGreen);
        }
        
    })


    
        
   
})






