import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("run");
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(newGuess) {
    const newGuesses = [...guesses, checkGuess(newGuess, answer)];
    setGuesses(newGuesses);

    if (newGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {status !== "run" && (
        <Banner
          answer={answer}
          nGuesses={guesses.length}
          gameStatus={gameStatus}
        />
      )}
      <GuessDisplay guesses={guesses} />
      <GuessInput
        newGuess={handleGuess}
        disable={gameStatus !== "run"}
      ></GuessInput>
    </>
  );
}

export default Game;
