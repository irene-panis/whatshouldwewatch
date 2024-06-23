import './Results.css'

export const Results = ({ results }) => {
  return (
    <div className="results-container">
      {
        results ? (
          results.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))
        ) : (
          <p>No results found!</p>
        )
      }
    </div>
  )
}