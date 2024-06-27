import { useState } from 'react'
import { Names } from '../Names/Names';
import { SubmitUsers } from '../SubmitUsers/SubmitUsers';
import './SearchBar.css'

export const SearchBar = ({ usernames, setUsernames, onSubmit, validArray }) => {

  const [input, setInput] = useState('');

  const [validUsername, setValidUsername] = useState(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setValidUsername(true);
  }

  const checkUsername = (username) => {
    // check length and alphanum/underscores
    if (username.length < 2 || username.length > 10) {
      return false;
    }
    const pattern = /^[a-zA-Z0-9_]+$/;
    if (!pattern.test(username)) {
      return false;
    }
    return true;
  }

  const handleAddUser = (username) => {
    if (!checkUsername(username)) {
      setValidUsername(false);
      return;
    }
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
        <button type="button" onClick={() => handleAddUser(input)}>
          Add User
        </button>
      </div>
      {!validUsername && <p>Usernames must be 2-15 characters and only contain letters, numbers, or underscores.</p>}
      {!validArray && <p>Please make sure you have between 2 and 10 users added.</p>}
      {usernames.length !== 0 && <Names usernames={usernames} onRemove={handleRemoveUser}/>}
      <SubmitUsers onSubmit={onSubmit}/>
    </>
  );
}