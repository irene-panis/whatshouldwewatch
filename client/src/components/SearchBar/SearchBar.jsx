import { useState } from 'react'
import { Names } from '../Names/Names';
import { SubmitUsers } from '../SubmitUsers/SubmitUsers';
import './SearchBar.css'

export const SearchBar = () => {
  const [usernames, setUsernames] = useState([]);

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddUser = () => {
    setUsernames([...usernames, input]);
    setInput('');
  }

  const handleRemoveUser = (usernameToRemove) => {
    setUsernames(usernames.filter(username => username !== usernameToRemove));
  }

  return (
    <>
      <div className="bar-and-btn">
        <div>
          <label htmlFor="username" className="sr-only">
            Letterboxd Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={input}
            onChange={handleInputChange}
            placeholder="Letterboxd username (e.g., irenesucks)"
            required
          />
        </div>
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <Names usernames={usernames} onRemove={handleRemoveUser}/>
      <SubmitUsers usernames={usernames}/>
    </>
  );
}