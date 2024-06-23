

export const Names = (usernames) => {
  return (
    <>
      {usernames.map((username, index) => (
        <div key={index}>{username}</div>
      ))}
    </>
  );
};
