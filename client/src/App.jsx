import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { useState } from 'react';

function App() {
  const [usernames, setUsernames] = useState([]);
  const handleSubmitUsers = () => {
    console.log(usernames);
  }
  return (
    <>
      <h1>what should we watch?</h1>
      <h2>Enter 2+ Letterboxd usernames below to find the overlap between your watchlists.</h2>
      <SearchBar usernames={usernames} setUsernames={setUsernames} onSubmit={handleSubmitUsers}/>
    </>
  )
}

export default App
