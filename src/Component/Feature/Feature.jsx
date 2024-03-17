import React from 'react'
import featured from '../../assets/featured.jpg';
import featuredIcon from '../../assets/featured-icon.png';
import './Feature.css';
import icon1 from "../../assets/info-icon-01.png"
import icon2 from "../../assets/info-icon-02.png"
import icon3 from "../../assets/info-icon-03.png"
import icon4 from "../../assets/info-icon-04.png"

import BasicExample from '../Accordion/Accordion';
import Table from '../Table/Table';
const Feature = () => {
  const tables =[
    {
      title:"250 m ",
      num:"2",
      img:icon1,
      sup:"al Flat Space ",

      label:"",
      reverce:"",
      rowT:"",

      none:"",

    },
    {title:"Contract ",
      num:"",
      img:icon2,
      rowT:"",

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

      label:"process",

      reverce:"",
      none:"",


    },
    {title:"Safety ",
    num:"",
    rowT:"",

    img:icon4,
    sup:"24/7 Under ",
    label:"control",
    reverce:"",
    none:"",


  }
  ]
  // accordion
  const acc=[
    {Quistion:"Best Usfel Link?",
    Answer: `Get  website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS template in the world. Please tell your friends about it`},
    {
        Quistion:"How does this work ?",

        Answer: "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    
    { Quistion:"Why is villa the best",
    string:" the best villa website ",

    Answer: "Dolar consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  
]
  return (
    <div className='section-featured'>
                   <div className="container-featured">
      <div className="row-featured">
        <div className="col-featured-4">
    <div className="img-left">
      <img src={featured} className='img-section'/>
      <a href="#"><img src={featuredIcon} className='icon-img'/></a>
    </div>
        </div>

        <div className="col-featured-4">
        <div className='acc'>
<h6>| Featured</h6>  
<h2>Best Appartment & Sea view</h2></div>
      <BasicExample acc={acc}/>
        </div>
        <div className="col-featured-4 ">
<Table tables={tables} />
        </div>

      </div>
     </div>

    </div>
  )
}

export default Feature