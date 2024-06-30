import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import { Results } from './components/Results/Results';
import { Footer } from './components/Footer/Footer';

function App() {
  const [usernames, setUsernames] = useState([]);
  const [results, setResults] = useState(null);

  // handle valid array error rendering
  const checkArray = (usernames) => {
    return (usernames.length >= 2 && usernames.length <= 10);
  }
  const [validArray, setValidArray] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000');
      return response.json();
    } catch (err) {
      console.error("Error fetching data", err);
    }
  }

  const handleSubmitUsers = async () => {
    if (!checkArray(usernames)) {
      setValidArray(false);
      setResults(null);
      return;
    }
    const data = await fetchData();
    setResults(data.movies);
  }

  useEffect(() => {
    setValidArray(true);
  }, [usernames]);

  return (
    <>
      <main>
        <div className="text">
          <h1>what should we watch?</h1>
          <h2>Enter 2+ Letterboxd usernames below to find the overlap between your watchlists.</h2>
        </div>
        <SearchBar usernames={usernames} setUsernames={setUsernames} onSubmit={handleSubmitUsers} validArray={validArray}/>
        {results && <Results results={results}/>}
      </main>
      <Footer/>
    </>
  )
}

export default App;
