export const Name = ({ username, onRemove }) => {
  return (
    <div>
      <p>{username}</p>
      <button type="button" onClick={() => onRemove(username)}>×</button>
    </div>
  )
}