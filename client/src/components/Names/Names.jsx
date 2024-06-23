import { Name } from "../Name/Name";

export const Names = ({ usernames, onRemove }) => {
  return (
    <>
      {usernames.map((username, index) => (
        <Name key={index} name={username} onRemove={onRemove}/>
      ))}
    </>
  );
};
