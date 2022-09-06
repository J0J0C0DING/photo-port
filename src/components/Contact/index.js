import React from 'react';

function ContactForm() {
  <section>
    <h1>Contact Me</h1>
    <form id="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>;
}

export default ContactForm;
