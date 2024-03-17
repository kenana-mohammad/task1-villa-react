import propertSingle from "../../assets/single-property.jpg"
import "./SectionPropertyDetails.css";
import icon1 from "../../assets/info-icon-01.png"
import icon2 from "../../assets/info-icon-02.png"
import icon3 from "../../assets/info-icon-03.png"
import icon4 from "../../assets/info-icon-04.png"
import Table from "../Table/Table";
import BasicExample from "../Accordion/Accordion";
import Department from '../Department/Department';
import SectionBest from "../SectionBest/SectionBest";

const SectionPropertyDetails = () => {
    const tables =[
        {
          title:"250 m2 ",
          num:"2",
          img:icon1,
          sup:"al Flat Space ",
          label:"",
          rowT:"",

          reverce:"",
          none:"",
    
        },
        {title:"Contract ",
          num:"",
      rowT:"",

          img:icon2,
          sup:"Contract Ready ",
          label:"",
          reverce:"",

          none:"",
    
        },
        {title:"Payment ",
          num:"",
          img:icon3,
          sup:"Payment ",
          rowT:"",

          label:"",
          reverce:"",
          none:"",
    
    
        },
        {title:"Safety ",
        num:"",
        img:icon4,
        sup:"24/7 Under ",
        label:"",
        rowT:"",

        reverce:"",
        none:"",
    
    
      },
     
      ]
      const  item =[
        {
          name:"Appartment",
          pink:"pink"
        }
      ]
      //accordion
      const acc=[
        {Quistion:"Best Usfel Link?",
        Answer: `Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`},
        {
            Quistion:"How does this work ?",
    
            Answer: "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        
        { Quistion:"Why is villa the best",
        string:" the best villa website ",
    
        Answer: "Dolar coDolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.nsectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      
    ]
    //table reverce
    
  return (
    <div className='single-property '>
        <div className="container-single-property">
            <div className="row-single-property">
                <div className="col-8-single-property">
                    <div className="img-main">
                        <img src={propertSingle} alt="" />
                    </div>
<div className="main-content">
  <Department item={item}/>
  <h4>24 New Street Miami, OR 24560</h4>
  <p>
  Get <strong>the best villa agency </strong>HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.<br/>

When you look for<a className="high"> free CSS templates</a>, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.

  </p>
  </div>                  

                    <BasicExample acc={acc}/>

                </div>
                <div className="col-4-single-property">
                <Table tables={tables} />
   
                    </div>
            </div>
        </div>
        <SectionBest/>
        
=    </div>
  )
}

export default SectionPropertyDetails