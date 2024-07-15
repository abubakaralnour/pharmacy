import React from 'react'
import cardprop from "./Carddata.json"
import Cardd from "./Cardd";
const Cardtow = () => {
  return (
    <div className='Cardtow'>
        <div className='photo-alone'> <img src='nmg.JPG'/></div> 

        <Cardd cardprop={cardprop}/>

    </div>
  )
}

export default Cardtow