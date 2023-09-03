import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const guessRows = Array.from(Array(NUM_OF_GUESSES_ALLOWED).keys());

  return (
    <div className="guess-results">
      {guessRows.map((i) => (
        <p className="guess" key={i}>
          {range(0, 5).map((j) => (
            <span className="cell" key={j}>
              {guesses[i]?.guess[j]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
