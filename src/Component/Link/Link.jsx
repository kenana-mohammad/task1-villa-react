import React from 'react'
import "./Link.css"
const Link = ({display}) => {
  return (

       
                 <a href="#" className='calender' > <i className={`fa fa-calendar ${display}`}> </i>
                 Schedule a visit 
                 </a>
  )
}

export default Link