import { useState } from "react";

export const DeleteButton = () => {

  const [input, setInput] = useState('');
  const [showConfirm, setShowConfirm] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setShowConfirm(false);
  }

  const handleDelete = async (username) => {
    const response = await fetch(`http://localhost:5000/delete/${username}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    setShowConfirm(data.message);
  }

  return (
    <div className="delete-container">
      <div>
        <div className="input-and-btn">
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
        <button type="button" onClick={() => handleDelete(input)}>
          Delete
        </button>
      </div>
      {showConfirm && <p>${input} deleted from the cache</p>}
    </div>
  );
}