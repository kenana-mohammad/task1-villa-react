import Table from '../Table/Table';
import './SectionBest.css';
import p5 from "../../assets/property-05.jpg";
import Link from '../Link/Link';
import Department from '../Department/Department';
const SectionBest = () => {
    
   const item=[
    {
name:"Apartment",
color:"",
    }
         ,
    {
        name:"Villa House",
        color:"",

    }
    ,{
        name:"penthouse",
        color:"",

    }
   ]
   const table =[
    {
        title:"25om ",
  num:"",
  img:"",
  sup:"al Flat Space ",
  label:"",
  reverce:"reverce",
  coloum:"",
  none:"none",
  rowT:"",

    },
    {
        title:"26th ",
  num:"",
  img:"",
  sup:"Floor number ",
  label:"",
  reverce:"reverce",
  rowT:"",

  none:"none",

    },
    {
        title:"4 ",
  num:"",
  img:"",
  sup:" number of room ",
  label:"",
  reverce:"reverce",
  rowT:"",

  none:"none",

    },
    {
        title:"yes ",
  num:"",
  img:"",
  sup:"parking Available ",
  label:"",
  reverce:"reverce",
  rowT:"",

  none:"none",

    },
    {
        title:"Bank ",
  num:"",
  img:"",
  sup:"Payment Process ",
  label:"",
  reverce:"reverce",
  rowT:"",

  none:"none",

    }
]
  return (
    <div className='section best-deal'>
        <div className="container-best">
            <div className="row-best">
                <div className="col-best-4">
<div className="section-heading">
    <h6>| Best Deal</h6>
    <h2>Find Your Best Deal Right Now!</h2>
</div></div>
              
                <div className="col-8-best">
                   <Department item={item} />
                   
                </div></div>
                </div>
                <div className="container-2">
                <div className="row-2-best">
                <div className="col-6-best">
                    <div className="table-content">
                        <Table tables={table}
                        
                        />
                    </div></div>
                    <div className="col-6-best">
                        <img src={p5} alt="" />
                    </div>
             
                    <div className="col-6-best">
                        <div className="title-best">
                        <h4>Extra Info About Property</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
                      <br/>
                      When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.


                        </p>
                      <Link/>

                        </div>
                    </div>
                    
                </div>
                </div>

             
            </div>
  )
}

export default SectionBest