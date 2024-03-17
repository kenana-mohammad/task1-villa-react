import React from 'react'
import "./FunFact.css"
const FunFact = ({data}) => {
  return (
    <div className='fun-fact'>
<div className="container-fact">

    <div className="row-fact">
{data.map((e,index)=>{
    return(
        <div className="col-4-fact" key={index}>
        <div className="counter">
            <h2 className='count-title'>{e.num}</h2>
            <p className='count-text'>
            {e.title} <br/>

{e.text}   </p>
        </div>
    </div>
    )
})}
       

            {/* 
             */}
            
        </div>
    </div>
</div>
  )
}

export default FunFact