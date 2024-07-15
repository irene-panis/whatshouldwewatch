import { useState } from "react";

export const DeleteCache = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
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