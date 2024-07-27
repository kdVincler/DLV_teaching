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
                    <div className="field">
                        <label>Name</label> <br />
                        <input type="text" name="user_name" placeholder='Enter your name'/>
                    </div>
                    <div className="field">
                        <label>Email</label> <br />
                        <input type="email" name="user_email" placeholder='Enter your email address'/>
                    </div>
                    <div className="field">
                        <label>Subject</label> <br />
                        <input type="text" name="subject" placeholder="Enter your email's subject"/>
                    </div>
                    <div className="field">
                        <label>Message</label> <br />
                        <textarea name="message" placeholder='Enter your message'/>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </section>
            
        </>
        
    );
}

export default Contact;