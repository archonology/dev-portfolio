import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/validation';

const Contact = (theme) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();
    const containerStyle = "contact-" + theme.theme;

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

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
        emailjs.sendForm('service_8vauvgr', 'template_favgkfg', form.current, '5oouP9wFVBIv7Jaue')

        alert(`
      Thanks for your message, ${name}! 
      I'll be in touch soon. 🌿
      - Reed Meher
      `);
    };


    return (
        <>
            <div className={containerStyle}>
                {errorMessage && (
                    <div style={{ marginBottom: 24 }} className='contact-row'>
                        <p className="error-text">{errorMessage}</p>
                        <hr />
                    </div>

                )}

                <form
                    ref={form}
                    onSubmit={handleFormSubmit}
                >
                    <div >

                        <input
                            className='contact-row'
                            id='nameInput'
                            value={name}
                            type="text"
                            name="name"
                            placeholder='Name'
                            onChange={handleInputChange}
                        />

                        <br />
                        <input
                            className='contact-row'
                            id='emailInput'
                            value={email}
                            type="text"
                            name="email"
                            placeholder='Email'
                            onChange={handleInputChange}
                        />
                        <br />
                        <textarea
                            className='contact-row'
                            id='messageInput'
                            value={message}
                            type="textarea"
                            name="message"
                            placeholder='Message'
                            onChange={handleInputChange}
                            rows='10'
                            cols='30'
                        />
                        <br />
                        <button type='submit' className='contact-row'>Send</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Contact;