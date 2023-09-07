import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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

  const guessSuccess = guesses.at(-1)?.guess === answer;
  const guessEnd =
    guesses.at(-1)?.guess !== answer &&
    guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuessAdd={handleGuessAdd}
        disabled={guessSuccess || guessEnd}
      />

      {guessSuccess && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length === 1
                ? `${guesses.length} guess`
                : `${guesses.length} guesses`}
            </strong>
            .
          </p>
        </div>
      )}

      {guessEnd && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
