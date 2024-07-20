import './DeleteCache.css';
import { useState } from "react";

export const DeleteCache = () => {
  const [input, setInput] = useState('');
  const [showConfirm, setShowConfirm] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setShowConfirm(false);
  }

  const handleDeleteUser = async () => {
    const response = await fetch(`http://localhost:5000/delete/${input}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    setShowConfirm(data.message);
    setInput('');
  }
  return (
    <div>
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
      {showConfirm && <p>{showConfirm}</p>}
    </div>
  );
}