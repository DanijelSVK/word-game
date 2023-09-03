import React from "react";

const GuessInput = ({ guess, setGuess, handleGuessAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    handleGuessAdd(guess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        title="required 5 characters length"
        pattern=".{5}"
      />
    </form>
  );
};

export default GuessInput;