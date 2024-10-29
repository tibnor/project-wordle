import React from "react";

function GuessInput({ newGuess, disable }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    newGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        required
        disabled={disable}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
