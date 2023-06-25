import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage(`
      Sorry, ${name}, 
      the email is missing something. 
      Please check it and try again, 
      thanks!
      `);
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        emailjs.sendForm('service_8vauvgr', 'template_favgkfg', form.current, '5oouP9wFVBIv7Jaue')

        alert(`
      Thanks for your message, ${name}! 
      I'll be in touch soon. ☕️
      - Reed Meher
      `);
    };


    return (
        <>
            <h2>Contact</h2>
            <p>Have questions or interested in services? Please reach out!</p>
            <hr />
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                    <hr />
                </div>

            )}
            <form ref={form} onSubmit={handleFormSubmit}>
                <label for='nameInput'></label>
                <input id='nameInput' value={name} onChange={handleInputChange} />
            </form>
        </>
    )
}

export default Contact;