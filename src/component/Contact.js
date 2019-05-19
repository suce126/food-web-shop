import React, { Component } from "react";
import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-1-of-2 costomerInfo">
            <input
              className="contactInput"
              type="text"
              placeholder="Your Name"
            />
            <br />
            <input className="contactInput" type="email" placeholder="Email" />
            <br />
            <textarea
              className="contactInput textarea"
              type="text"
              placeholder="Message"
            />
            <br />
            <button type="submit">Submit</button>
          </div>

          <div className="col-1-of-2 companyInfo">
            <h4>Kildehusvej 4, 4000 Roskilde</h4>
            <h4>(45) 50343888</h4>
            <h4>sushi@sushi.dk</h4>
          </div>
        </div>
      </div>
    );
  }
}
