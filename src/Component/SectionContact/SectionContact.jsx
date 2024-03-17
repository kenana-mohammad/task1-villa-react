import React from 'react'
import "./SectionContact.css"
import Form from '../Form/Form'
import icon1 from "../../assets/phone-icon.png"
import icon2 from "../../assets/email-icon.png"
import Table from '../Table/Table'
const SectionContact = () => {
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
    <div className='page-section'>

        <div className="container-page-contact">
            <div className="row-page-contact">
                <div className="col-6-page-contact">
                    <div className="section-heading-page">
                        <h6>| Contact Us</h6>
                        <h2>Get In Touch With Our Agents</h2>
                    </div>
                    <p>
                    When you really need to download free 
                    CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.

                    </p>
                    <div className="row-table-con">
                        <div className="col-12-table-con">
                            <Table tables={table1}/>
                        </div>
                        <div className="col-12-table-con">
                            <Table tables={table2}/>
                        </div>
                    </div>
                </div>
                <div className="col-6-page-contact">
                    <Form/>
</div>

            </div>
        </div>
        <div className="container-map">
            <div className="row-map">
            <div className="col-12-map">
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" style={{width:"100%",height:"500px" }}allowFullScreen=""></iframe>

    </div>
</div>
            </div>
        </div>

    </div>
    
  )
}

export default SectionContact