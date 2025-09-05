import './Results.css'

export const Results = ({ results }) => {
  if (Object.keys(results.overlap_groups).length === 0) return <p>No overlaps found :( Please modify your list and try again.</p>
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