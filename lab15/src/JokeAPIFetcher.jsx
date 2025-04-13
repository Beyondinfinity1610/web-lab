import React, { useState, useEffect } from 'react';

const JokeAPIFetcher = () => {
  const [joke, setJoke] = useState('');

  const loadJoke = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch {
      setJoke("Error loading joke.");
    }
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <div>
      <button onClick={loadJoke}>Refresh Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default JokeAPIFetcher;
