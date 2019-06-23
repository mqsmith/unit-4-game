

$(document).ready(function () {
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    var random = Math.floor(Math.random() * 101 + 19);
    console.log(random);

    // Appending random number to the randomNumber id in the html doc
    $("#randomNumber").text(random);

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    //  Decaring variables for tallies

    //resets the game

    //adds the wins to the userTotal

    //addes the losses to the userTotal

    //sets up click for jewels

    //sets win/lose conditions

});