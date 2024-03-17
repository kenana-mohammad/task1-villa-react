import './Header.css';
import React from 'react'

const Header = ({title}) => {
  return (
    <div className="hero">
<div className="container-header">
  <div className="row-h">
    <div className="col-12-h">
      <span className='bread'>
        <a>
          Home 
        </a>
       /  {title}
      </span>
      <h3>{title}</h3>
    </div>
  </div>
</div>
    </div>
  )
}

export default Header