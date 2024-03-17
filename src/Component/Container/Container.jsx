import React from 'react'
import './Container.css'
import Card from '../Card/Card'
import p1 from '../../assets/property-01.jpg'
import p2 from '../../assets/property-02.jpg'
import p3 from '../../assets/property-03.jpg'
import p4 from '../../assets/property-04.jpg'
import p5 from '../../assets/property-05.jpg'
import p6 from '../../assets/property-06.jpg'


const Container = () => {
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
      ]
  return (
    
    
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
    
 )}

export default Container