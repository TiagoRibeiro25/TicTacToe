//* Player -> X (1)
//* Computer -> O (-1)

//* GLOBAL VARIABLES

/* Creating a 3x3 array of zeros. */
const table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

/* Declaring a variable called gamesPlayed and assigning it a value of 0. */
let gamesPlayed = 0;

/* Creating a new audio object and assigning it to the variable btnAudio. */
const btnAudio = new Audio("./audio/click audio.mp3");
const resetBtnAudio = new Audio("./audio/reset audio.mp3");

/**
 * "For each button with the class X, set its color to red. For each button with the class O, set its
 * color to blue."
 *
 * Now, let's call this function after each move
 */
function updateColors() {
  document.querySelectorAll(".X").forEach((btn) => {
    btn.style.color = "red";
  });

  document.querySelectorAll(".O").forEach((btn) => {
    btn.style.color = "blue";
  });
}

/**
 * If the button is empty, then add an X to the button, add the class X to the button, update the table
 * with a 1, and update the colors.
 * @param btn - the button that was clicked
 */
function makePlayerMove(btn) {
  if (btn.innerHTML === "") {
    btn.innerHTML = "X";
    btn.classList.add("X");

    const position = btn.id;
    table[position[0]][position[2]] = 1;

    updateColors();
  }
}

/**
 * If the computer can win, it will win. If the player can win, the computer will block. Otherwise, the
 * computer will play randomly.
 */
function makeComputerMove() {
  //* CHECK IF WINNING IS POSSIBLE

  /* first row */
  if (table[0][0] + table[0][1] + table[0][2] === -2) {
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[0][1] === 0) {
      table[0][1] = -1;
      document.getElementById("0-1").innerHTML = "O";
      document.getElementById("0-1").classList.add("O");
    } else {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    }

    /* second row */
  } else if (table[1][0] + table[1][1] + table[1][2] === -2) {
    if (table[1][0] === 0) {
      table[1][0] = -1;
      document.getElementById("1-0").innerHTML = "O";
      document.getElementById("1-0").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[1][2] = -1;
      document.getElementById("1-2").innerHTML = "O";
      document.getElementById("1-2").classList.add("O");
    }

    /* third row */
  } else if (table[2][0] + table[2][1] + table[2][2] === -2) {
    if (table[2][0] === 0) {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    } else if (table[2][1] === 0) {
      table[2][1] = -1;
      document.getElementById("2-1").innerHTML = "O";
      document.getElementById("2-1").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }

    /* first column */
  } else if (table[0][0] + table[1][0] + table[2][0] === -2) {
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[1][0] === 0) {
      table[1][0] = -1;
      document.getElementById("1-0").innerHTML = "O";
      document.getElementById("1-0").classList.add("O");
    } else {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    }

    /* second column */
  } else if (table[0][1] + table[1][1] + table[2][1] === -2) {
    if (table[0][1] === 0) {
      table[0][1] = -1;
      document.getElementById("0-1").innerHTML = "O";
      document.getElementById("0-1").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][1] = -1;
      document.getElementById("2-1").innerHTML = "O";
      document.getElementById("2-1").classList.add("O");
    }

    /* third column */
  } else if (table[0][2] + table[1][2] + table[2][2] === -2) {
    if (table[0][2] === 0) {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    } else if (table[1][2] === 0) {
      table[1][2] = -1;
      document.getElementById("1-2").innerHTML = "O";
      document.getElementById("1-2").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }
  } else if (table[0][0] + table[1][1] + table[2][2] === -2) {
    /* first diagonal */
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }

    /* second diagonal */
  } else if (table[0][2] + table[1][1] + table[2][0] === -2) {
    if (table[0][2] === 0) {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    }
  }

  //* PREVENT LOSING

  /* first row */
  else if (table[0][0] + table[0][1] + table[0][2] === 2) {
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[0][1] === 0) {
      table[0][1] = -1;
      document.getElementById("0-1").innerHTML = "O";
      document.getElementById("0-1").classList.add("O");
    } else {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    }

    /* second row */
  } else if (table[1][0] + table[1][1] + table[1][2] === 2) {
    if (table[1][0] === 0) {
      table[1][0] = -1;
      document.getElementById("1-0").innerHTML = "O";
      document.getElementById("1-0").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[1][2] = -1;
      document.getElementById("1-2").innerHTML = "O";
      document.getElementById("1-2").classList.add("O");
    }

    /* third row */
  } else if (table[2][0] + table[2][1] + table[2][2] === 2) {
    if (table[2][0] === 0) {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    } else if (table[2][1] === 0) {
      table[2][1] = -1;
      document.getElementById("2-1").innerHTML = "O";
      document.getElementById("2-1").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }

    /* first column */
  } else if (table[0][0] + table[1][0] + table[2][0] === 2) {
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[1][0] === 0) {
      table[1][0] = -1;
      document.getElementById("1-0").innerHTML = "O";
      document.getElementById("1-0").classList.add("O");
    } else {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    }

    /* second column */
  } else if (table[0][1] + table[1][1] + table[2][1] === 2) {
    if (table[0][1] === 0) {
      table[0][1] = -1;
      document.getElementById("0-1").innerHTML = "O";
      document.getElementById("0-1").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][1] = -1;
      document.getElementById("2-1").innerHTML = "O";
      document.getElementById("2-1").classList.add("O");
    }

    /* third column */
  } else if (table[0][2] + table[1][2] + table[2][2] === 2) {
    if (table[0][2] === 0) {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    } else if (table[1][2] === 0) {
      table[1][2] = -1;
      document.getElementById("1-2").innerHTML = "O";
      document.getElementById("1-2").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }
  } else if (table[0][0] + table[1][1] + table[2][2] === 2) {
    /* first diagonal */
    if (table[0][0] === 0) {
      table[0][0] = -1;
      document.getElementById("0-0").innerHTML = "O";
      document.getElementById("0-0").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][2] = -1;
      document.getElementById("2-2").innerHTML = "O";
      document.getElementById("2-2").classList.add("O");
    }

    /* second diagonal */
  } else if (table[0][2] + table[1][1] + table[2][0] === 2) {
    if (table[0][2] === 0) {
      table[0][2] = -1;
      document.getElementById("0-2").innerHTML = "O";
      document.getElementById("0-2").classList.add("O");
    } else if (table[1][1] === 0) {
      table[1][1] = -1;
      document.getElementById("1-1").innerHTML = "O";
      document.getElementById("1-1").classList.add("O");
    } else {
      table[2][0] = -1;
      document.getElementById("2-0").innerHTML = "O";
      document.getElementById("2-0").classList.add("O");
    }
  }

  //* PLAY RANDOMLY
  else {
    while (true) {
      const random1 = Math.floor(Math.random() * 3);
      const random2 = Math.floor(Math.random() * 3);

      if (table[random1][random2] === 0) {
        /* update table variable */
        table[random1][random2] = -1;

        /* update DOM */
        document.getElementById(`${random1}-${random2}`).innerHTML = "O";
        document.getElementById(`${random1}-${random2}`).classList.add("O");

        break;
      }
    }
  }

  updateColors();
}

/**
 * It checks if the player or the computer has won the game.
 * @returns a string.
 */
function checkWin() {
  /* check rows */
  for (let i = 0; i < 3; i++) {
    if (table[i][0] + table[i][1] + table[i][2] === 3) {
      return "player";
    }
    if (table[i][0] + table[i][1] + table[i][2] === -3) {
      return "computer";
    }
  }

  /* check columns */
  for (let i = 0; i < 3; i++) {
    if (table[0][i] + table[1][i] + table[2][i] === 3) {
      return "player";
    }
    if (table[0][i] + table[1][i] + table[2][i] === -3) {
      return "computer";
    }
  }

  /* check diagonals */
  if (table[0][0] + table[1][1] + table[2][2] === 3) {
    return "player";
  } else if (table[0][2] + table[1][1] + table[2][0] === 3) {
    return "player";
  }
  if (table[0][0] + table[1][1] + table[2][2] === -3) {
    return "computer";
  } else if (table[0][2] + table[1][1] + table[2][0] === -3) {
    return "computer";
  }

  return false;
}

/**
 * If there are any empty cells in the table, return false, otherwise return true
 * @returns a boolean value.
 */
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (table[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
}

/**
 * It resets the table and the DOM
 */
function resetTable() {
  /* reset table */
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      table[i][j] = 0;
    }
  }

  /* reset DOM */
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      setTimeout(() => {
        document.getElementById(`${i}-${j}`).innerHTML = "";
        document.querySelector("#winner").innerText = "playing...";
      }, 1000);
      document.getElementById(`${i}-${j}`).classList.remove("X");
      document.getElementById(`${i}-${j}`).classList.remove("O");
    }
  }

  /* update games played */
  gamesPlayed++;
  updateGamesPlayed(gamesPlayed);

  /* Every 2 games the computer starts first */
  if (gamesPlayed % 2 === 1) {
    setTimeout(() => {
      makeComputerMove();
    }, 1000);
  }
}

/**
 * It updates the score by checking who won, and then updating the score accordingly.
 */
function updateScore() {
  const currentScore = document.querySelector("#score").innerText;

  let playerScore = +currentScore[0];
  let computerScore = +currentScore[4];

  if (checkWin() === "player") {
    playerScore++;
    document.querySelector("#winner").innerText = "Player has won";
  } else if (checkWin() === "computer") {
    computerScore++;
    document.querySelector("#winner").innerText = "Computer has won";
  } else {
    document.querySelector("#winner").innerText = "Draw";
  }

  document.querySelector(
    "#score"
  ).innerText = `${playerScore} - ${computerScore}`;
}

/**
 * It takes a number as an argument, and updates the text of the h2 element to say "Games Played: "
 * followed by the number.
 * @param [n=0] - The number of games played.
 */
function updateGamesPlayed(n) {
  document.querySelector("h2").innerText = `Games Played: ${n}`;
}

/* Adding an event listener to each button. When the button is clicked, it will check if the game is
over. If it is, it will update the score and reset the table. If it is not, it will make the
player's move, check if the game is over, and if it is not, it will make the computer's move. */
document.querySelectorAll("th").forEach((btn) => {
  btn.addEventListener("click", () => {
    btnAudio.play();

    if (checkWin() || checkDraw()) {
      updateScore();
      resetTable();
      return;
    }

    makePlayerMove(btn);

    if (checkWin() || checkDraw()) {
      updateScore();
      resetTable();
      return;
    }

    makeComputerMove();

    if (checkWin() || checkDraw()) {
      updateScore();
      resetTable();
      return;
    }
  });
});

/* Adds an event listener to the reset button when it's clicked.
The gamesPlayed variable is reset to 0 and the and the score is also reset to 0 - 0. */
document.querySelector("#resetBtn").addEventListener("click", () => {
  resetBtnAudio.play();
  gamesPlayed = 0;
  updateGamesPlayed(gamesPlayed);
  document.querySelector("#score").innerText = "0 - 0";
});
