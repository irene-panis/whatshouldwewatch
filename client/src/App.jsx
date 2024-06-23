import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  return (
    <>
      <h1>what should we watch?</h1>
      <h2>Enter 2+ Letterboxd usernames below to find the overlap between your watchlists.</h2>
      <SearchBar/>
    </>
  )
}

export default App
