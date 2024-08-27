import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/4Contact.css';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (window.confirm("Are you sure you want to send the email?")) {
            emailjs
            .sendForm('service_b1cx2cb', 'template_h7qphcj', form.current, {
                publicKey: 'HpLnozdCUZX_FObQm',
            })
            .then(
                () => {
                // console.log('SUCCESS!');
                window.alert("Email sent.");
                e.target.reset() // reset form after submission
                },
                (error) => {
                // console.log('FAILED...', error.text);
                window.alert("Email failed to send. \n Error: ", error.text);
                },
            );
        }  
    };

    return (
        <>
            <section className="tile contact">
                <h1>
                    Contact me
                </h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='input' type="text" name="user_name" placeholder='Your name*' required/>
                    <input className='input' type="email" name="user_email" placeholder='Email address*' required/>
                    <input className='input' type="text" name="email_subject" placeholder="Subject*" required/>
                    <textarea className='input' name="message" placeholder='Your message*' required/>
                    <input type="submit" value="SEND" />
                </form>
            </section>
            
        </>
    );
}

export default Contact;