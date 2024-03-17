import React from 'react'
import Department from '../Department/Department'
import "./SectionProperty.css";
import Card from '../Card/Card';
import p1 from '../../assets/property-01.jpg'
import p2 from '../../assets/property-02.jpg'
import p3 from '../../assets/property-03.jpg'
import p4 from '../../assets/property-04.jpg'
import p5 from '../../assets/property-05.jpg'
import p6 from '../../assets/property-06.jpg'


const SectionProperty = () => {
    const item=[
        ,{
            name:"show all"
    
        },
        {
    name:"Apartment"
        }
        ,
        {
            name:"Villa House"
    
        }
        ,{
            name:"penthouse"
    
        }
       ]
    //    card
    const cards= [
        {
          img: p1,
           name:"Luxury Villa",
            price: "$2.264.000",
             title: "18 New Street Miami,OR 97219",
              bedroom:"8 ",bathrooms: "8",
               area: "545m2" ,floor: "3",parking: "3 spot:",
               display:"none",

        },
        {
          img: p2,
           name:"Luxury Villa",
            price: "$1.180.000",
             title: "54 Mid Street Florida, OR 27001",
              bedroom:" 6",bathrooms: "5",
               area: "548m2" ,floor: "3",parking: "8 spot:",
               display:"none",

        },
        {
            img: p3,
             name:"Luxury Villa",
              price: "$2.264.000",
               title: "26 Old Street Miami, OR 38540",
                bedroom:"5",bathrooms: "4",
                 area: "225m2" ,floor: "3",parking: "10 spots:",
                 display:"none",

          },
          {
            img: p4,
             name:"Luxury Villa",
              price: "$2.264.000",
               title: "26 Old Street Miami, OR 38540",
                bedroom:"5",bathrooms: "4",
                 area: "225m2" ,floor: "3",parking: "10 spots:",
                 display:"none",
          },
          {
            img: p5,
             name:"Luxury Villa",
              price: "$2.264.000",
               title: "26 Old Street Miami, OR 38540",
                bedroom:"5",bathrooms: "4",
                 area: "225m2" ,floor: "3",parking: "10 spots:",
                 display:"none",

          },
          {
            img: p6,
             name:"Luxury Villa",
              price: "$2.264.000",
               title: "26 Old Street Miami, OR 38540",
                bedroom:"5",bathrooms: "4",
                 area: "225m2" ,floor: "3",parking: "10 spots:",
                 display:"none"

          },
          {
            img: p1,
             name:"Luxury Villa",
              price: "$2.264.000",
               title: "18 New Street Miami,OR 97219",
                bedroom:"8 ",bathrooms: "8",
                 area: "545m2" ,floor: "3",parking: "3 spot:",
                 display:"none",
  
          },
          {
            img: p2,
             name:"Luxury Villa",
              price: "$1.180.000",
               title: "54 Mid Street Florida, OR 27001",
                bedroom:" 6",bathrooms: "5",
                 area: "548m2" ,floor: "3",parking: "8 spot:",
                 display:"none",
  
          },
          {
              img: p3,
               name:"Luxury Villa",
                price: "$2.264.000",
                 title: "26 Old Street Miami, OR 38540",
                  bedroom:"5",bathrooms: "4",
                   area: "225m2" ,floor: "3",parking: "10 spots:",
                   display:"none",
  
            },
      ]
  return (
    <div className='section-property'> 
    <div className="container-property">
        <div className="row-property-1">

<div className='col-12-propertyes'>
<Department item={item} />

</div>
        </div>

    </div>
    <div className="container-card">
            <div className="row-card">
                
        {cards.map((e,index)=>{
  return(
    <div key={index } className='base'>
    <Card img={e.img} name={e.name} price={e.price} title={e.title} bedroom={e.bedroom} 
     area={e. area}     
     floor={e. floor}
     parking={e. parking}
     display={e.display}
     bold={e. bold}
     

    />
    </div>
            )
          })}
    </div>
    </div>
    {/* paginate */}
    <div className="row-paginate">
        <div className="lg-12 paginate">
            <ul className='pagination'>
                <li> <a href="#"> 1</a></li>
                <li>  <a href="#" className='child'> 2</a>  </li>
                <li>  <a href="#"> 3</a></li>
                <li>  <a href="#"><i class="fas fa-arrow-right"></i> </a></li>
            </ul>
        </div>
    </div>
    </div>
 )}


export default SectionProperty