import React, { useState } from 'react';
import "./Contact.css"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container pt-4 fs-4 fw-bold d-flex justify-content-center">
    <form>
      <div className="mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn fs-5 fw-bold">Send</button>
    </form>
  </div>
);
}

export default Contact;

