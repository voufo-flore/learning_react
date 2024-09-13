import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='VOUFO'/>
                <input type="text" name='lastname' placeholder='FLORE'/>
            </div>
            <input type="text"  name='email' placeholder='florevoufo@gmail.com'/>
            <input type="text"  name='contact' placeholder='+237654897023'/>
            <textarea name="text" type="Message" placeholder='Message' rows={3}></textarea>
            <button>SEND</button>
        </form>
    </div>
  );
};

export default ContactForm;