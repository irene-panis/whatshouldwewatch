import './SubmitUsers.css'

export const SubmitUsers = ({ usernames }) => {
  const handleSubmitUsers = () => {
    console.log(usernames);
  }
  return (
    <button 
      type="button"
      onClick={handleSubmitUsers}
    >
      What Should We Watch?
    </button>
  )
}