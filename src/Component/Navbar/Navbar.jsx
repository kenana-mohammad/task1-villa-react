import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Link from '../Link/Link'
// import Link from '../Link/Link'
function Navbar() {
  function show(){
        let nav =document.querySelector(".col-8-nav");
       
        nav.classList.toggle("add");

    }
 
   
  return (
    <div className='headers-nav '>
        <div className="container-header-nav">
      
            <div className="row-nav">
            
<div className="col-4-nav">
{/* <nav className='main-navs'> */}
<a href="#" className='logo'> <h1>Villa</h1></a></div>
<span  className="menu-nav" onClick={show}>
                    <i className='fa fa-bars'></i>
                 </span>
            
<div className="col-8-nav">

<ul className='navlist'>
             <li>
                 <NavLink to="/"
                 className={({isActive}) => 
                    isActive ?"active" :""
                }
                 >Home</NavLink>
                 </li>
                 <li>
                 <NavLink to="/propierty"
                 className={({isActive}) => 
                    isActive ?"active" :""
                }
                 >propierty</NavLink>
                 </li>
                 <li>
                 <NavLink to="/propriertydetaills"
                 className={({isActive}) => 
                    isActive ?"active" :""
                }
                 >proprierty  Detaills</NavLink>
                 </li>
                 <li>
                 <NavLink to="/contact"
                 className={({isActive}) => 
                    isActive ?"active" :""
                }
                 >Contact us</NavLink>
                 </li>
                 <li>
              <Link />
                 </li>
                 </ul>
              

</div>

    {/* </nav>  */}

</div>

            </div>
               

</div>

  )
}

export default Navbar