import "./Card.css";
import Link from "../Link/Link";
const Card = ({img,name,title,price,bedroom,bathrooms,floor,area,parking,display}) => {
  return (
    
        
        
<div className="col-card-4">
    <div className="item">
        <a href="#">
        <img src={img} alt="" className="img-card" />

        </a>
        <span className="category">{name}</span>
        <h6>{price}</h6>
        <h4>
            <a href="">
            {title}<br/> 97219
            </a>
        </h4>
        <ul>
            <li>
           bedroom :
                <span>{bedroom}</span>
            </li>
            <li>
           bathrooms:
          
                <span>{bathrooms}</span>
            </li>
            <li>
                floor :
          
                <span>{floor}</span>
            </li>
            <li>
                area :
          
                <span>{area}</span>
            </li>
            <li>
                parking :
          
                <span>{parking}</span>
            </li>
          
        </ul>
        <Link display={display}/>
</div>
    </div>
    
          

  )
}

export default Card