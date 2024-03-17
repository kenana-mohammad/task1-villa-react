import Accordion from 'react-bootstrap/Accordion';
import  './Accordion.css'
function BasicExample({acc}) {
 
  return (

  <Accordion defaultActiveKey="0">
        {acc.map((e,index)=>{
            return(
<Accordion.Item eventKey={index}>
        <Accordion.Header>
          {e.Quistion}</Accordion.Header>
        <Accordion.Body>
         {/* Get <strong>{e.string}</strong> */}

         {e.Answer}
        </Accordion.Body>
      </Accordion.Item>
            )
        })}
      
      
    </Accordion>
  );
}

export default BasicExample;