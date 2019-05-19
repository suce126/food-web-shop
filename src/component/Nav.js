import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/takeaway">Takeaway</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </nav>
      </div>
    );
  }
}
