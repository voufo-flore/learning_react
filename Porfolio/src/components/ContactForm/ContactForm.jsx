import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name='VOUFO'/>
                <input type="text" name='FLORE'/>
            </div>
            <input type="text"  name='florevoufo@gmail.com'/>
            <textarea name="text" type="Message"></textarea>
        </form>
    </div>
  );
};

export default ContactForm;