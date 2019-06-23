

$(document).ready(function() {
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    var random = Math.floor(Math.random() * 101 + 19);
    console.log(random);

    // Appending random number to the randomNumber id in the html doc
    $("#number").text(random);

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    //Decaring variables for tallies
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#userScore").text("Your Score: " + userScore);
    //resets the game
    function reset(){
        random = Math.floor(Math.random() * 101 + 19);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $("#userScore").text("Your Score: " + userScore);
    }

    //adds the wins to the userTotal
    function win (){
        wins++;
        alert("Winner, Winner!");
        $("#wins").text("Wins: " + wins);
        reset();
    }
    //addes the losses to the userTotal
    function lose (){
        losses++;
        alert("Whomp, Whomp!");
        $("#losses").text("Losses: " + losses);
        reset();
    }
    //sets up click for jewels
    $("#1").click(function(){
        userScore = userScore + num1;
    console.log("Your Score: " + userScore);
    $("#userScore").text("Your Score: " + userScore); 
          //sets win/lose conditions
        if (userScore == random){
          win();
        }
        else if ( userScore > random){
          lose();
        }   
  })  

  $("#2").click(function(){
    userScore = userScore + num2;
console.log("Your Score: " + userScore);
$("#userScore").text("Your Score: " + userScore); 
      //sets win/lose conditions
    if (userScore == random){
      win();
    }
    else if ( userScore > random){
      lose();
    }   
})  
$("#3").click(function(){
    userScore = userScore + num3;
console.log("Your Score: " + userScore);
$("#userScore").text("Your Score: " + userScore); 
      //sets win/lose conditions
    if (userScore == random){
      win();
    }
    else if ( userScore > random){
      lose();
    }   
})  
$("#4").click(function(){
    userScore = userScore + num4;
console.log("Your Score: " + userScore);
$("#userScore").text("Your Score: " + userScore); 
      //sets win/lose conditions
    if (userScore == random){
      win();
    }
    else if ( userScore > random){
      lose();
    }   
})  
    

});