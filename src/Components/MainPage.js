import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainPage = () => {
  const [inner, setInner] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleClick} className="formsData">
        <input
          type="text"
          placeholder="country name"
          value={inner}
          onChange={(e) => setInner(e.target.value)}
        />

        {inner ? (
          <Link to="/next" state={{ detail: inner }}>
            <button type="submit">Submit</button>
          </Link>
        ) : (
          <button type="submit" disabled="disabled">
            Submit
          </button>
        )}
      </form>
    </>
  );
};
export default MainPage;
