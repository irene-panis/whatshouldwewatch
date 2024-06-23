import { Name } from "./Name";

export const Names = ({ usernames, onRemove }) => {
  return (
    <>
      {usernames.map((username, index) => (
        <Name key={index} username={username} onRemove={onRemove}/>
      ))}
    </>
  );
};
