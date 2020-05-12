import React from "react";

const ContactMeForm = ({
  data,
  handleStorMessage,
  handleStoreEmail,
  handleStoreName,
  handleStoreSubject,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-label-group">
          <label htmlFor="inputName">Your Name</label>
          <input
            type="text"
            id="inputName"
            className="form-control reset-password field"
            placeholder="your name"
            onChange={handleStoreName}
            value={data.name}
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
          onChange={handleStoreEmail}
          value={data.email}
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
          onChange={handleStoreSubject}
          value={data.subject}
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
          onChange={handleStorMessage}
        ></textarea>
      </div>
      {!data.success || data.submitCheck ? (
        <div
          className={`alert alert-${
            data.submitCheck === true ? "success" : "danger"
          } validation-container`}
          role="alert"
        >
          {data.errMessage}
        </div>
      ) : null}
      <div className="submit-button">
        <button type="button" className="main-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
