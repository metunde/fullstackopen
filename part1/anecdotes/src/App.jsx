import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0); // Track the selected anecdote index
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); // Initialize votes with 0s for each anecdote

  const handleVote = () => {
    const newVotes = [...votes]; // Create a copy of the current votes array
    newVotes[selected] += 1; // Increment the vote count for the selected anecdote
    setVotes(newVotes); // Update state with the new votes array
  };

  const handleIndex = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length); // Generate a random index
    setSelected(randomIndex); // Set the selected anecdote to the random index
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleIndex}>Next Anecdote</button>
      <h2>Anecdote with the Most Votes</h2>
      <p>
        {anecdotes[votes.indexOf(Math.max(...votes))]} <br />
        Votes: {Math.max(...votes)}
      </p>
    </div>
  );
};

export default App;
