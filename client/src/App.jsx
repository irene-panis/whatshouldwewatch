import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { useState } from 'react';
import { Results } from './components/Results/Results';

function App() {
  const [usernames, setUsernames] = useState([]);
  const [results, setResults] = useState(null);
  const handleSubmitUsers = () => {
    setResults(usernames);
  }
  return (
    <>
      <h1>what should we watch?</h1>
      <h2>Enter 2+ Letterboxd usernames below to find the overlap between your watchlists.</h2>
      <SearchBar usernames={usernames} setUsernames={setUsernames} onSubmit={handleSubmitUsers}/>
      {results && <Results results={results}/>}
    </>
  )
}

export default App
