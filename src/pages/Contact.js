import { useState, useRef } from "react";
// import Image from "mui-image";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/validation";
// import ocean from "../images/computes.jpeg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage(`
      Please check the email address you entered.
      `);
      return;
    } else if (!name) {
      setErrorMessage(`
            Please include a name.`);

      return;
    } else if (!message) {
      setErrorMessage(`
            Please include a message.`);

      return;
    }
    emailjs.sendForm(
      "service_3dgvq19",
      "template_favgkfg",
      form.current,
      "9sgFkM95lTANHeSj5"
    );
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");

    alert(`
      Thanks for your message, ${name}! 
      I'll be in touch soon. 🌿
      - Reed Meher
      `);
  };

  return (
    <>
      <div className="oceanBox">
        {/* <Image
          id="ocean"
          src={ocean}
          bgColor="black"
          alt="detail of an ocean wave"
          duration={5000}
        ></Image> */}
      </div>
      <div id="contactBox">
        <div id="contactTextBox">
          <p>
            Contact Reed just to <strong>say hello</strong>, get a full resume,
            chat about potential collaborations, jobs, and contract services.
          </p>
          <br />
          <p>I look forward to hearing from you!</p>
        </div>
        <form ref={form} onSubmit={handleFormSubmit}>
          <div>
            <input
              className="form-row"
              id="nameInput"
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
            />

            <br />
            <input
              className="form-row"
              id="emailInput"
              value={email}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <br />
            <textarea
              className="form-row"
              id="messageInput"
              value={message}
              type="textarea"
              name="message"
              placeholder="Message"
              onChange={handleInputChange}
              rows="10"
              cols="30"
            />
            <br />
            <button type="submit" className="form-row sendBtn">
              <p>Send</p>
            </button>
            {errorMessage && (
              <p className="error-text" style={{ color: "#ff2a00" }}>
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
