import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="header d-flex justify-content-between align-items-center">
      <h3 className="header-title">
        <a href="#">Game of Thrones DB</a>
      </h3>
      <ul className="header-list d-flex align-items-center">
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Houses</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
