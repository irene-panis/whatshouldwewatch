import './Names.css'
import { Name } from "../Name/Name";

export const Names = ({ usernames, onRemove }) => {
  return (
    <div className="names-container">
      {usernames.map((username, index) => (
        <Name key={index} username={username} onRemove={onRemove}/>
      ))}
    </div>
  );
};
