import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessAdd = () => {
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      { id: crypto.randomUUID(), guess },
    ]);
    setGuess("");
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuessAdd={handleGuessAdd}
      />
    </>
  );
}

export default Game;
