/* eslint-disable react/no-unescaped-entities */
export const Error = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
      <p>Please remove the user from the list or make sure their watchlist isn't empty.</p>
    </div>
  )
}