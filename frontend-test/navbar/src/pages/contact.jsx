import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const YOUR_SERVICE_ID =  'service_8tiqd5l';
const YOUR_TEMPLATE_ID = 'template_eslzc6p';
const YOUR_PUBLIC_KEY =  '8vEZul4QAa6yNr5ju';



export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus("sent");
            }, (error) => {
                console.log(error.text);
                setStatus("error");
            });
    };

    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>  
                <input type="text" name="from_name" />
                <label>Company</label>  
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>

            {status === "sending" && (
                <div style={{ color: "blue" }}>sending...</div>
                )
            }
            {status === "sent" && (
                <div style={{ color: "green" }}>Message sent!</div>
            )
            }
            {status === "error" && (
                <div style={{ color: "red" }}>Message failed to send.</div>
            )

            }
        </div>    
        </>
    );
};