import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("react js");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div style={{ marginTop: "10px" }} className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onSubmit(e)}>
        <div className="field">
          <label>Video Search</label>
          <input value={term} onChange={(e) => onInputChange(e)} type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
