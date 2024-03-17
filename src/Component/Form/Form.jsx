import React from 'react'
import "./Form.css";
import Link from '../Link/Link'

const Form = () => {
   
  return (
<form action="" id="contact-form"> 
              <div className="row-form">
                <div className="col-12-form"> 
                  <fieldset>
<label htmlFor="name">Full Name</label>
<input type="text" name='name' id="name" placeholder='Your Name..' />

                  </fieldset>
                 </div> 
                 <div className="col-12-form"> 
                  <fieldset>
<label htmlFor="email">Email Address</label>
<input type="email" name='email' id="email" placeholder='Your Email..' />

                  </fieldset>
                 </div>
                 <div className="col-12-form"> 
                  <fieldset>
<label htmlFor="subject">Subject </label>
<input type="text" name='subject' id="subject" placeholder='Your subject..' />

                  </fieldset>
                 </div>
                 <div className="col-12-form"> 
                  <fieldset>
<label htmlFor="message">Message </label>
<textarea name="message" id='message'></textarea>
                  </fieldset>
                 </div>
                 <div className="col-12-form"> 
                  <fieldset>
<Link display="display"/>
                  </fieldset>
                 </div>
              </div>
             </form>   )
}

export default Form