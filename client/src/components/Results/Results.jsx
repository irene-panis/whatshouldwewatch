import './Results.css'

export const Results = ({ results }) => {
  return (
    <>
      <div className="results-container">
        {
          results ? (
            results.map((movie, index) => (
              <p key={index} className="result">{movie}</p>
            ))
          ) : (
            <p>0 overlaps found. Please try again.</p>
          )
        }
      </div>
    </>
  )
}