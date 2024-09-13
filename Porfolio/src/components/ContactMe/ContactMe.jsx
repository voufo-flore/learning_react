import React from "react";
import "./ContactMe.css";
import { Email, Github } from "../../index.js"; 
import ContactInfoCard from "../ContactForm/ContactForm.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{ flex: 1 }}></div>
                <ContactInfoCard 
                iconUrl= {Email}
                text= "florevoufo@google.com"
                />
                <div style={{ flex: 1 }}>
               
                </div>
            </div>

        </section>
    
    )
}



export default ContactMe;