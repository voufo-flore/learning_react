import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='firstname'/>
                <input type="text" name='lastname' placeholder='lastname'/>
            </div>
            <input type="text"  name='email' placeholder='email'/>
            <input type="text"  name='contact' placeholder='contact'/>
            <textarea name="text" type="Message" placeholder='Message' rows={3}></textarea>
            <button>SEND</button>
        </form>
    </div>
  );
};

export default ContactForm;