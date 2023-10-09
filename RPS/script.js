var startButton = document.querySelector("button");
var buttons = document.querySelectorAll(".my-button");
var centerContainer = document.querySelector(".center-container");
var countdownStart = document.createElement("h1");
var title = document.querySelector("h1");
var intervalId;
var count = 3;

var rock = document.querySelector("#rockId");
var paper = document.querySelector("#paperId");
var scissors = document.querySelector("#scissorsId");

var button = document.querySelector(".speaker");
var sound = new Audio("sounds/song-test.wav");

var score = document.querySelector(".score");
var scoreCount = 0;

var computerRoll = randomString();

var playerRoll;
var computerRoll;
var result;

var restartButton = document.createElement("button");

restartButton.innerHTML = "Play Again";
restartButton.className = "restart-button";

var restartContainer = document.querySelector(".restartContainer");

restartButton.addEventListener("click", function () {
  console.log("Testing Restart Button");
});

rock.addEventListener("click", function () {
  playerRoll = rock.getAttribute("data-value");
  getResult(playerRoll);
});

paper.addEventListener("click", function () {
  playerRoll = paper.getAttribute("data-value");
  getResult(playerRoll);
});

scissors.addEventListener("click", function () {
  playerRoll = scissors.getAttribute("data-value");
  getResult(playerRoll);
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {

    // buttons[0].remove();
    // buttons[1].remove();
    // buttons[2].remove();


    buttons[0].style.display = 'none';
    buttons[1].style.display = 'none';
    buttons[2].style.display = 'none';




    title.style.display = "none";

    centerContainer.appendChild(countdownStart);

    playCountdownSound();

    countdown();

    intervalId = setInterval(countdown, 1000);
  });
});

function countdown() {
  if (count >= 1) {
    countdownStart.textContent = count;
    count--;
  } else {
    countdownStart.textContent = result;

    if (result === "You win!") {
      scoreCount++;
      score.innerHTML = "Score: " + scoreCount;
    }

    restartContainer.appendChild(restartButton);

    clearInterval(intervalId);
  }
}

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  return randomNum;
}

function randomString() {
  let randomNum = getRandomNum();
  let roll;

  switch (randomNum) {
    case 1:
      roll = rock.getAttribute("data-value");
      break;
    case 2:
      roll = paper.getAttribute("data-value");
      break;
    case 3:
      roll = scissors.getAttribute("data-value");
      break;
  }

  return roll;
}

function getResult(playerRoll) {
  console.log("Your Roll: " + playerRoll);
  console.log("Opponent's Roll: " + computerRoll);

  if (playerRoll === computerRoll) {
    result = "Tie!";

    console.log("Tie!");
  } else {
    switch (playerRoll) {
      case "rock":
        result = computerRoll === "scissors" ? "You win!" : "You Lost";

        break;

      case "paper":
        result = computerRoll === "scissors" ? "You win!" : "You Lost";

        break;

      case "scissors":
        result = computerRoll === "scissors" ? "You win!" : "You Lost";
        break;

      default:
        console.log("Invalid Input");
    }
  }

  return result;
}

// Function to play the sound when hovering
function playCountdownSound() {
  const sound = new Audio("sounds/mixkit-simple-game-countdown-921.wav");

  sound.play();
}

function playHoverSound() {
  const sound = new Audio("sounds/mixkit-gate-latch-click-1924.wav");

  sound.play();
}

button.addEventListener("click", function () {
  console.log("hello World");

  if (button.classList.contains("fa-volume-xmark")) {
    button.classList.remove("fa-volume-xmark");
    button.classList.add("fa-volume-high");
    sound.play();
  } else {
    button.classList.remove("fa-volume-high");
    button.classList.add("fa-volume-xmark");
    sound.pause();
    sound.currentTime = 0;
  }
});

function resetGame() {
  // Reset the UI
  countdownStart.textContent = "";
  restartContainer.removeChild(restartButton);




  rock.style.display = 'block'; 
  paper.style.display = 'block';
  scissors.style.display = 'block';

  


  // centerContainer.appendChild(rock);
  // centerContainer.appendChild(paper);
  // centerContainer.appendChild(scissors);

  // title.style.display = "block";

  // Reset game variables
  count = 3;
  computerRoll = randomString();
  result = "";
}

// Modifying the restartButton click event to call resetGame
restartButton.addEventListener("click", resetGame);
