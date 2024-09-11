import React from "react";
import "./ContactMe.css";
import {Email} from "../../index.js"

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
                 <ContactInfoCard 
                iconUrl= {Email}
                text= "http://githib.com/Time-to-program"
                />
                <div style={{ flex: 1 }}></div>
            </div>

        </section>
    
    )
}



export default ContactMe;