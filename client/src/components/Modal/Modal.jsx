import './Modal.css';
import { AboutModal } from '../AboutModal/AboutModal';

export const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        <AboutModal/>
      </div>
    </div>
  );
}