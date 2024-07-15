import { useState ,useEffect} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import CloseButton from 'react-bootstrap/CloseButton';
import { Button } from 'react-bootstrap';



  
  const Notification = ({ message }) => {
    const [isVisible, setIsVisible] = useState(false);
   // const [show, setshow] = useState(true)
  
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000); // Hide notification after 3 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    return (<>{isVisible? 
      <div className={`notification ${isVisible ? 'show' : 'hide'}`}>


        {<div className='noti'>


<div><h5>hii abubakar alnour do you want to show our new project</h5></div>

<div className='noti-button'>
<div><Button>show more</Button></div>
<div><Button onClick={()=>setIsVisible(false)}>no'thanks</Button></div>
</div></div>
} 
      </div>:null}
      </>
    );
  };

  


export default Notification;