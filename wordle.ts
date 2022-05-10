function markWordleGuess(guess: string, hiddenTarget: string) {
    let guessArray = guess.split("");
    let hiddenTargetArray = hiddenTarget.split("");
    let markedGuess = [];
  
    for (let i = 0; i < guessArray.length; i++) {
      if (hiddenTargetArray[i] === guessArray[i]) {
        markedGuess.push(`${guessArray[i]}: GREEN`);
      } else if (hiddenTarget.includes(guessArray[i])) {
        const letterCountInHT = numberOfOccurences(hiddenTarget, guessArray[i]);
        const letterCountInGuess = numberOfOccurences(guess, guessArray[i]);
        if (letterCountInHT === letterCountInGuess) {
          markedGuess.push(`${guessArray[i]}: YELLOW`);
        } else if (letterCountInGuess > letterCountInHT) {
          markedGuess.push(`${guessArray[i]}: GREY`);
        }
      } else {
        console.log("not in HT")
      markedGuess.push(`${guessArray[i]}: GREY`);
    }
    }
    return markedGuess;
  }
  
  function numberOfOccurences(string: string, letter: string) {
    let count = 0;
    for (let char of string) {
      if (char === letter) {
        count++;
      }
    }
    return count;
  }
  console.log(markWordleGuess("MIILK", "MILKS"));
 

