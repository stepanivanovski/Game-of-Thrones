import React from "react";
import {Link} from 'react-router-dom'
import "./header.css";

const Header = () => {
  return (
    <div class="header d-flex justify-content-between align-items-center">
      <h3 className="header-title">
        <Link to="/">Game of Thrones DB</Link>
      </h3>
      <ul className="header-list d-flex align-items-center">
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/houses">Houses</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
