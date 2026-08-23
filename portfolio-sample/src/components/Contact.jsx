import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="content-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
