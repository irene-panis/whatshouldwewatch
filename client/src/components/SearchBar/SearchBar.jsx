import { useState } from 'react'
import './SearchBar.scss'
import { Names } from '../Names/Names';

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
      <div>
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
            required
          />
        </div>
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <Names usernames={usernames} onRemove={handleRemoveUser}/>
    </>
  );
}