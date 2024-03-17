import React from 'react'
import './Table.css'
const Table = ({tables}) => {
  return (
    <div className='table-info'>
        <ul class="table-sec">
        {tables.map((e,index)=>{
          return(
            <li key={index}>
             <div className={e.rowT} >
              <div className="row-tables">
              <div className={`"ap" ${e.none}`}>

              <img src={e.img}/>
            <p>{e.label}</p>
              </div>
          
            <div className={`"sup" ${e.reverce}`}>
            <h4>{e.title} <sup>{e.num}</sup></h4>
            <span>
{e.sup}
            </span></div>
            </div></div>
  
        </li>
          )
        })}
           
        </ul>
    </div>
  )
}

export default Table