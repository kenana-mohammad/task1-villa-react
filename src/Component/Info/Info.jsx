import React from 'react'
import "./Info.css"
const Info = ({icon,header,social}) => {
  return (
    <div className="sub-header">
        <div className="container-sub-header">
            <div className="row-sub-header">
              <div class="coloum-sub-header-8">
            <ul className="info">
            {header.map((e,index)=>{
                    return(
                <li key={index}>
                   <i className={e.icon} ></i> 
                   {e.item}
                </li>
                  )  })} 
               
            </ul> </div>
            
            <div className="col-sub-header-4">
                <ul className='social-link'>
                   {social.map((element,index)=>{
                    return(
                        <li key={index}>
                        <a href="#">
                            <i className={element}></i>
                            </a>
                    </li>
                    
                    
              )  })} 
                    
                   
                </ul>
                </div>
           
</div>
    </div></div>
  )
}

export default Info