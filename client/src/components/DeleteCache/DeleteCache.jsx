import { useState } from "react";

export const DeleteCache = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleDeleteUser = async () => {
    await fetch('http://localhost:5000', {
      method: 'DELETE'
    })
  }
  return (
    <div className="delete-bar">
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
      <button type="button" onClick={() => handleDeleteUser(input)}>
        Delete
      </button>
    </div>
  );
}