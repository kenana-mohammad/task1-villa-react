// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Home from "./Component/Pages/Home"
import Properities from "./Component/Pages/Properities"
import PropertyDetails from "./Component/Pages/PropertyDetails"
import ContactUs from "./Component/Pages/ContactUs"
import Navbar from "./Component/Navbar/Navbar"
import Info from "./Component/Info/Info"
import Footer from "./Component/Footer/Footer"
function App() {
  // const [count, setCount] = useState(0)
const title =[{icon :'fa fa-envelope',item:"info@company.com"},
{icon :'fa fa-map ',item:"Sunny Isles Beach, FL 33160"}]  
  const social = ['fab fa-facebook','fab fa-twitter','fab fa-linkedin','fab fa-instagram']
  return (
    <>
      <div className="app">
     
      <Info  header={title}
      social={social} />
              <Navbar/>

        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route  path="/propierty"  element={<Properities/>}/>
        <Route  path="/propriertydetaills"  element={<PropertyDetails/>}/>
        <Route  path="/contact"  element={<ContactUs/>}/>


        </Routes>
<Footer/>
       </div>
    </>
  )
}

export default App
