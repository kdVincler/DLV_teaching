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
                <div className='flex justify-center'>
                    <a 
                        className="secondButton"
                        href='https://linkedin.com/in/dorotivincler'
                        target='_blank'
                    >
                        <div className='flex gap-2 align-middle items-center justify-center text-white font-bold text-md md:text-2xl'>
                            LinkedIn
                            <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                        </div>
                    </a>
                </div>
                <h1>
                    Email me
                </h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='input' type="text" name="user_name" placeholder='Your name*' required/>
                    <input className='input' type="email" name="user_email" placeholder='Email address*' required/>
                    <input className='input' type="text" name="email_subject" placeholder="Subject*" required/>
                    <textarea className='input' name="message" placeholder='Your message*' required/>
                    <input type="submit" value="SEND"  className='text-md md:text-2xl'/>
                </form>
            </section>
            
        </>
    );
}

export default Contact;