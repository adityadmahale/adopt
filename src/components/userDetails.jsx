import React from "react";

const UserDetails = ({ user }) => {
  return user ? (
    <React.Fragment>
      <h1>{user.username}</h1>
    </React.Fragment>
  ) : null;
};

export default UserDetails;
