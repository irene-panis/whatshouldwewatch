import './Results.css'

export const Results = ({ results }) => {
  return (
    <>
      <div className="results-container">
        {
          results ? (
            results.map((movie, index) => (
              <a href={movie.link} target="_blank" key={index} className="result">{movie.title}</a>
            ))
          ) : (
            <p>0 overlaps found. Please try again.</p>
          )
        }
      </div>
    </>
  )
}