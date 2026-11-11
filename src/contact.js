 import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for your message!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-page">
      <div className="contact-box">

        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>

        <div className="contact-info">
          <p>📍 Tripoli, Lebanon</p>
          <p>📞 +961 12345678</p>
          <p>✉️ restaurant@example.com</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;