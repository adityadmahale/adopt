import React from "react";

const Search = ({ onSearch, value }) => {
  return (
    <input
      className="form-control search mt-1"
      type="text"
      placeholder="Search"
      aria-label="Search"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Search;
