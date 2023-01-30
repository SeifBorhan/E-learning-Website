import React, { useState } from "react";

import "./Search.scss";

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div class="scale">
        <div class="container">
          <input class="input" type="text" placeholder="Search..." />
          <div class="search"></div>
        </div>
      </div>
    </form>
  );
};

export default Search;
