import React from "react";

function Banner({ nGuesses, answer, gameStatus }) {
  if (gameStatus === "lost")
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
 else if (gameStatus === "won") {
    return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{nGuesses} guesses</strong>.
    </p>
  </div>
  }
  return null
}

export default Banner;
