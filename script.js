function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
  
  }
  console.log(getRandomComputerResult());