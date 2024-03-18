import React, { useState } from "react";

export const Search = ({ filterProducts }) => {
  const [searchText, setSerachText] = useState("");

  return (
    <div className="search-cotnainer">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="which items you are looking for?"
          value={searchText}
          onChange={(e) => setSerachText(e.target.value)}
        />

        <button
          className="search-button"
          onClick={() => {
            filterProducts(searchText);
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};
