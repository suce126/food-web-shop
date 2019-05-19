import React, { Component } from "react";
import './Takeaway.scss'

export default class Takeaway extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#home">Menu</a>
          </li>
          <li>
            <a href="#news">Nigiri</a>
          </li>
          <li>
            <a href="#contact">Maki</a>
          </li>
          <li>
            <a href="#about">Tilbehør</a>
          </li>
        </ul>
      </div>
    );
  }
}
