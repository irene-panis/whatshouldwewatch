import './Modal.css';

export const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}