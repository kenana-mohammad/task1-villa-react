import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/banner-01.jpg"
import banner2 from "../../assets/banner-02.jpg"
import banner3 from "../../assets/banner-03.jpg"
import './Carousel.css';
function DarkVariantExample() {
  const carousel =[
    {
        title :"Get the best villa for you",
        btn:"Toronto,canada",
        label1:"Melbourne",
        label2:"canda",
        img:banner1
    },
    {
        title :"Be Quick get the best vailla in town",
        btn:"Toronto,canada",
        label1:"Melbourne  ",
        label2:"Australia",

        img:banner2
    },
    {

        title :"Act now! get the heighest level ",
         label1:"miami", 
        label2:"South Florida",
        img:banner3
    }
  ]
  return (
    <Carousel data-bs-theme="dark">
        

        {carousel.map((e,index)=>{
            return (
<Carousel.Item>
    <div key={index}>
        <img
          className="d-block w-100"
          src={e.img}
          alt="First slide"
        />
        <Carousel.Caption>
            <span>{e.label1} <em> , {e.label2}</em></span>
          <h1>{e.title}</h1>

        </Carousel.Caption>
        </div>
      </Carousel.Item>
            )
        })}
    
     
    </Carousel>
  );}
export default DarkVariantExample;