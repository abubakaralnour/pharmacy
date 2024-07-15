import React, { useState, useEffect } from 'react';
import Navs from './Navs';
import HHeadroom from './HHeadroom';

const ScrollNavbarExample = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   

      
     const scrolltop=window.scrollY
     if(scrolltop >100){  
   
     setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolled ? <HHeadroom /> : <Navs />}
      
    
    </div>
  );
};

export default ScrollNavbarExample;
