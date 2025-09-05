import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { useState, useEffect } from 'react';
import { Results } from './components/Results/Results';
import { Footer } from './components/Footer/Footer';
import { Error } from './components/Error/Error';
import { Modal } from './components/Modal/Modal';

function App() {
  const [usernames, setUsernames] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle valid array error rendering
  const checkArray = (usernames) => {
    return (usernames.length >= 2 && usernames.length <= 10);
  }
  const [validArray, setValidArray] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernames })
      });
      const data = await response.json();
      if (data.error) {
        return data.message;
      }
      return data;
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
    setLoading(true);
    const data = await fetchData();
    setLoading(false);
    setResults(data);
  }

  useEffect(() => {
    setValidArray(true);
  }, [usernames]);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <main>
        <div className="text">
          <h1>what should we watch?</h1>
          <h2>Enter 2+ Letterboxd usernames below to find the overlap between your watchlists.</h2>
          <h2>Please note longer watchlists can cause up to 20 seconds of loading time.</h2>
        </div>
        <div className="buttons">
          <a
            onClick={() => handleShowModal()}
          > 
            how to use
          </a>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
        <SearchBar usernames={usernames} setUsernames={setUsernames} onSubmit={handleSubmitUsers} validArray={validArray}/>
        {loading && <p>loading results...</p>}
        {!loading && typeof results === 'string' && <Error error={results}/>}
        {!loading && typeof results === 'object' && results !== null && <Results results={results}/>}
      </main>
      <Footer/>
    </>
  )
}

export default App;
