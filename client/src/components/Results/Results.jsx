import './Results.css'

export const Results = ({ results }) => {
  const groups = Object.keys(results.overlap_groups).sort((a, b) => parseInt(b) - parseInt(a));
  return (
    <>
      <div className="results-container">
        {groups.map((groupNum, index) => (
          <div key={index} className="group-container">
            <p>Overlaps in {groupNum} watchlists</p>
            <div className="group-results">
              {
                results.overlap_groups[groupNum].map((movie, index) => (
                  <a key={index} className="result" href={movie.link}>{movie.title}</a>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </>
  );
}