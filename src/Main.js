/*

import React, { useState, useEffect } from 'react';

const Main = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const images = [
    'secondimgeshow.jpg',
    'Web.jpg',

    'towmg.jpg',
    
    // Add more image URLs as needed
  ];
  const intervalTime = 3000; // 2000 milliseconds = 2 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random index to pick a new image
      const randomIndex = Math.floor(Math.random() * images.length);
      setBackgroundImage(images[randomIndex]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once after initial render

  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
   
    backgroundImage: `url(${backgroundImage})`,
     // Optional: Add a smooth transition effect
    cursor:' pointer',
  translate: '0 -8px',
 
  };

  return <div style={containerStyle}></div>;
};

export default Main;
*/

import React from 'react'
import {useState,useEffect} from 'react'
const Main = () => {
const [imageback, setimageback] = useState('')
const images=['wowwww.jpg','secondimgeshow.jpg','wowwww3.jpg','Web.jpg','towmg.jpg','aldawaa-sos-1240x357-.ar.jpg','wooww2']

const intervaltme=3000;
useEffect(()=>{
const interval =setInterval(() => {
  const bg=Math.floor(Math.random()*images.length)
  setimageback(images[bg])
}, intervaltme);
return ()=> clearInterval(interval)

},[])

const contanerstyle={
  width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    
    backgroundImage: `url(${imageback})`,
    cursor:' pointer',
  translate: '0 -8px',
 
  
};

  return <>
    <div style= {contanerstyle}></div>
   </>
};

export default Main