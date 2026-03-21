
// Term 1 JavaScript Project: Mood Tracker
// Mood Tracker JavaScript

// Read the comments carefully.
// Complete the message text in each event below.

// Select the message element
const message = document.getElementById("message");

// Select the buttons
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const excitedBtn = document.getElementById("excitedBtn");
const resetBtn = document.getElementById("resetBtn");


// Happy button event
happyBtn.addEventListener("click", function () {

  // TODO: Change the message to show a happy mood
  message.textContent = "happy mood";

  // This line changes the background color
  document.body.style.backgroundColor = "#101452";

});

// Sad button event
sadBtn.addEventListener("click", function () {

    // TODO: Change the message to show a sad mood
    message.textContent = "sad mood";

    // This line changes the background color
    document.body.style.backgroundColor = "#03444d";

});

// Excited button event
excitedBtn.addEventListener("click", function () {

    // TODO: Change the message to show an excited mood
    message.textContent ="excited mood"

    // This line changes the background color
    document.body.style.backgroundColor = "purple";

});

// Reset button event
resetBtn.addEventListener("click", function () {
    // TODO: Change the message to the default state
    message.textContent = "to the default state";

    // This line resets the background color
    document.body.style.backgroundColor = "white";
})