import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Contact</Link></li>
          <li className="navButton"><Link to="">CV</Link></li>
          <li className="navButton"><Link to="home">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;