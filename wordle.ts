function markWordleGuess(guess: string, hiddenTarget: string) {
    let guessArray = guess.split("");
    let hiddenTargetArray = hiddenTarget.split("");
    let markedGuess:string[] = [];

    let counter:number[] = [];
    const greenIndexes = []


    for (let i = 0; i < guessArray.length; i++) {
    if (hiddenTargetArray[i] === guessArray[i]) {
        markedGuess.push(`${guessArray[i]}:${i} : GREEN`);
        greenIndexes.push(i)
      }  
      console.log(greenIndexes)
    }

    for (let i = greenIndexes.length -1; i >= 0; i--){
    guessArray.splice(greenIndexes[i],1);
    hiddenTargetArray.splice(greenIndexes[i],1);
    }


  
    for (let i = 0; i < guessArray.length; i++) {
    const letterCountInHT = numberOfOccurences(hiddenTarget, guessArray[i]);
    const letterCountInGuess = numberOfOccurences(guess, guessArray[i]);
    
      

    if (hiddenTargetArray.includes(guessArray[i])) {
        
        if (letterCountInHT === letterCountInGuess) {
          markedGuess.push(`${guessArray[i]}: YELLOW`);
        } 


        else if (letterCountInGuess > letterCountInHT) {   
            counter.push(letterCountInHT)
            while (counter[0] != 0){
                markedGuess.push(`${guessArray[i]}: YELLOW LOL`);
                const prev:any = counter.pop()
                const newVal:any = prev -1
                counter.push(newVal)
                break
            }  
            while (counter[0] === 0){
                markedGuess.push(`${guessArray[i]}: GREY LOL`)
               break
        }
             
    } 


        else if (letterCountInGuess < letterCountInHT) {
          markedGuess.push(`${guessArray[i]}: YELLOW`);
        }

     
    } else {
        markedGuess.push(`${guessArray[i]}: GREY`);
      }

}


if (markedGuess.length === 5 && greenIndexes.length > 0 ){
    for (let i = 0 ; i < greenIndexes.length ; i++){
        let letterToMove:any = markedGuess.shift()
        markedGuess.splice(greenIndexes[i], 0, letterToMove)
        console.log(letterToMove, "letter to move")
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

  
console.log(markWordleGuess("BAAA", "BBBB"));
  //   console.log(markWordleGuess("PEARS", "APPLE"));
  
  
 
