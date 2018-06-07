import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/rss">
            Add RSS
          </Link>
        </li>
        <li>
          <Link to="/my">
            My RSS
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/home">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
