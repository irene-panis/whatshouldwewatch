import './SubmitUsers.css'

export const SubmitUsers = ({ onSubmit }) => {
  return (
    <button 
      type="button"
      className="submit-btn"
      onClick={onSubmit}
    >
      What Should We Watch?
    </button>
  )
}