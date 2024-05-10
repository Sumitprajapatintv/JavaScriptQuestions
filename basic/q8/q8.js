// Write a JavaScript program where the program takes a random integer between 1 and 10,
// and the user is then prompted to input a guess number. The program displays a message "Good Work" 
//if the input matches the guess number otherwise "Not matched".


function func() {
  const number = prompt("Please Enter the Number Beetween 1 and 10");

  const randomNumber = Math.ceil(Math.random() * 10);

  if (number == randomNumber) {
    console.log("Good Work")
    // const newDiv = document.createElement("div");
    document.getElementById("heading").innerHTML = "Good";
  }
  else {
    // const newDiv = document.createElement("div");
    // const abc = document.getElementById("div")
    // abc.innerHTML("kjshd")
    document.getElementById("heading").innerHTML = "Bad";

  }

}
