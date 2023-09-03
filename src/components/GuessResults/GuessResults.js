import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  const guessRows = Array.from(Array(NUM_OF_GUESSES_ALLOWED).keys());

  return (
    <div className="guess-results">
      {guessRows.map((i, index) => {
        const checkGuessResult = checkGuess(guesses[index]?.guess, answer);

        return (
          <p className="guess" key={i}>
            {range(0, 5).map((j) => (
              <span
                className={`cell ${
                  (checkGuessResult && checkGuessResult[j].status) || ""
                }`}
                key={j}
              >
                {guesses[i]?.guess[j]}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
