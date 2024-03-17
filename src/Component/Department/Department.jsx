import React from 'react'
import './Department.css'
const Department = ({item}) => {

  return (
<>
    <div className="nav-tab">
    <ul>
{
item.map((e,index)=>{
    return(
<li  key={index} className={` nav-item ${e.pink}`}>
            <button className='nav-link'>{e.name}</button>
        </li>
    )
})
}
        
                       </ul>
    </div>   </> 
    
    )
}

export default Department