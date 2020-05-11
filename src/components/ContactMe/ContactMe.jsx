import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./ContactMe.css";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      errMessage: "",
      success: false,
    };
  }

  handleSubmit = (e) => {
    console.log("State", this.state);
  };

  handleStoreEmail = (e) => {
    let email = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, email };
    });
  };

  handleStoreName = (e) => {
    let name = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, name };
    });
  };

  handleStoreSubject = (e) => {
    let subject = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, subject };
    });
  };

  render() {
    return (
      <Fade bottom duration={1500} distance="25px">
        <div className="contacts-main" id="contact">
          <div className="contact-main-div">
            <div className="contact-header">
              <h1 className="heading contact-heading">Contact Me</h1>
              <p className="contact-subtitle">
                GET IN TOUCH, TALK ABOUT A PROJECT COLLABORATION, OR JUST SAY HI
                !
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="inputName">Your Name</label>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control reset-password field"
                    placeholder="your name"
                    onChange={this.handleStoreName}
                    value={this.state.name}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email Address</label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control reset-password field"
                  placeholder="email address"
                  onChange={this.handleStoreEmail}
                  value={this.state.email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputSubject">Subject</label>
                <input
                  type="text"
                  id="inputSubject"
                  className="form-control reset-password field"
                  placeholder="subject"
                  onChange={this.handleStoreSubject}
                  value={this.state.subject}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Your Message</label>
                <textarea
                  className="form-control field"
                  id="inputMessage"
                  rows="7"
                  placeholder={"Leave your message here !"}
                ></textarea>
              </div>
              <div className="submit-button">
                <button
                  type="button"
                  className="main-button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ContactMe;
