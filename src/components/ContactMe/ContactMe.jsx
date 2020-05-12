import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./ContactMe.css";
import ContactMeForm from "./ContactMeForm";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errMessage: "",
      success: true,
      submitCheck: false,
    };
  }
  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleSubmit = (e) => {
    let errMessage = "";
    let hasError = false;
    if (this.state.name === "") {
      errMessage = "⚠ Your name can not be empty";
      hasError = true;
    } else if (this.state.email === "") {
      errMessage = "⚠ Email Address can not be empty!";
      hasError = true;
    } else if (this.state.email) {
      let validEmail = this.validateEmail(this.state.email);
      if (!validEmail) {
        errMessage = "⚠ Invalid Email Address";
        hasError = true;
      }
    } else if (this.state.message === "") {
      errMessage = "⚠ Your Message can not be empty!";
      hasError = true;
    } else if (this.state.subject === "") {
      console.log("Ramadan-Kareem");
      errMessage = "⚠ Email Subject can not be empty!";
      hasError = true;
    }
    if (hasError) {
      this.setState({ errMessage, success: false, submitCheck: false });
    } else {
      this.setState({
        success: true,
        submitCheck: true,
        errMessage: "🎉 You Message has been submitted successfully",
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
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

  handleStorMessage = (e) => {
    let message = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, message };
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
        <div className="virtual-contact" id="contact"></div>
        <div className="contacts-main">
          <div className="contact-main-div">
            <div className="contact-header">
              <h1 className="heading contact-heading">Contact Me</h1>
              <p className="contact-subtitle">
                GET IN TOUCH, TALK ABOUT A PROJECT COLLABORATION, OR JUST SAY HI
                !
              </p>
            </div>
            <ContactMeForm
              handleStorMessage={this.handleStorMessage}
              handleStoreEmail={this.handleStoreEmail}
              handleStoreName={this.handleStoreName}
              handleStoreSubject={this.handleStoreSubject}
              handleSubmit={this.handleSubmit}
              data={this.state}
            />
          </div>
        </div>
      </Fade>
    );
  }
}

export default ContactMe;
