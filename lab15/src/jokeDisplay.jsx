import React, { useState } from 'react';

const JokeDisplay = () => {
  const jokesList = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'",
    "Why was the math book sad? It had too many problems!"
  ];

  const [currentJoke, setCurrentJoke] = useState("");

  const showRandomJoke = () => {
    const randomJoke = jokesList[Math.floor(Math.random() * jokesList.length)];
    setCurrentJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={showRandomJoke}>Tell me a joke</button>
      {currentJoke && <p>{currentJoke}</p>}
    </div>
  );
};

export default JokeDisplay;
