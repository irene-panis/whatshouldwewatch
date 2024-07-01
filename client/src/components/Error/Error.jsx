/* eslint-disable react/no-unescaped-entities */
export const Error = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
      <p>Please remove the user from the list and try again.</p>
    </div>
  )
}