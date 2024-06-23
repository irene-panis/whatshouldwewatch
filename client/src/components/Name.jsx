export const Name = ({ username, onRemove }) => {
  return (
    <div className="name">
      <p>{username}</p>
      <button 
        type="button" 
        onClick={() => onRemove(username)}
        className="unbuttonize"
      >
        ×
      </button>
    </div>
  )
}