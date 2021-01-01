import React from 'react';
import './style/contactForm.scss';
const ContactForm = () => {
    return (
        <div className="contactForm">
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" className="required" required />
                <textarea placeholder="Message" className="required" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactForm;