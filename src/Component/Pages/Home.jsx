import DarkVariantExample from "../../Component/Carousel/Carousel"
import Feature from "../Feature/Feature"

import Container from "../Container/Container"

import SectionBest from "../SectionBest/SectionBest"
import Video from "../Video/Video"
import Contact from "../Contact/Contact"

function Home() {
  
  return (
    <>

             <DarkVariantExample/>
<Feature/>
<Video/>
<SectionBest/>
<div>
<div className='section-Card'>
        <div className="row-12-card">

            <div className="col-12-card">
            <h6>| Properties</h6>
        <h2> We Provide The Best Property You Like </h2>
        
            </div>
        </div>
</div>

<Container/>

</div>
<Contact/>
    </>
  )
}

export default Home