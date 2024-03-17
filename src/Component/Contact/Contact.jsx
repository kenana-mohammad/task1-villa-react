import React from 'react'
import "./Contact.css"
import icon1 from "../../assets/phone-icon.png"
import icon2 from "../../assets/email-icon.png"
import Table from '../Table/Table'
import Form from '../Form/Form'

const Contact = () => {
  // const ifr={
  //    width: "100%",
  //      frameborder:"0" ,
  //      height:"500px"
  // }

  const table1=[
    {
      title:"010-020-0340 ",
      num:"",
      img:icon1,
      reverce:"",
      rowT:"rowT",
      sup:"phone Number ",

      label:"",
      none:"",

    },]
   const table2 =[ {title:"info@villa.co ",
      num:"",
      img:icon2,
      sup:"Business Email",
      label:"",
      rowT:"rowT",

      reverce:"",
      none:"",

    },
  ]
  return (
    <>
    <div className='section-contact'>
        <div className="container-contact">
          <div className="row-contact">
            <div className="col-conatct-4">
<div className="section-heading">
  <h6>| Contact Us</h6>
  <h2>Get In Touch With Our Agents</h2>
</div>
            </div>
          </div>
        </div>
    </div>
    <div className="contact-content">
      <div className="container-contact-content">
        <div className="row-contact-content">
          <div className="col-contact-content-7">
            <div id="map"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" style={{width:"100%",height:"500px" }}allowFullScreen=""></iframe>
            </div>
            <div className="row-table-sec">
              <div className="col-6-table-contact">
              <Table tables={table1}/>

              </div>
              <div className="col-6-table-contact">
              <Table tables={table2}/>

              </div>
            </div>


          </div>
          <div className="col-contact-content-5">
            <Form/>
            {/* <form action="" id="contact-form"> 
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
<Link display={display.display}/>
                  </fieldset>
                 </div>
              </div>
             </form>  */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact