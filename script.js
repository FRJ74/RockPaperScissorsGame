function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
  
function hasPlayerWonTheRound(player, computer) {
  return ( 
    (player === "Rock" && computer === "Scissors")  ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer ===  "Rock" ) 
  );
  }

  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound === true) {
      playerScore ++;
      return `"Player wins!" ${userOption} " beats " ${computerResult} " !"`
    } else if (hasPlayerWonTheRound === !true || !false) {
      return `It's a tie! Both chose  ${userOption} !`
    } else {
      return `"Computer wins! " ${computerResult} " beats " ${userOption} " !"`
      computerScore ++;
    }
   
  }