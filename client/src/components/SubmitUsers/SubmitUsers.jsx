import './SubmitUsers.css'

export const SubmitUsers = ({ onSubmit }) => {
  return (
    <button 
      type="button"
      onClick={onSubmit}
    >
      What Should We Watch?
    </button>
  )
}