import React from 'react'
   
import Header from "./Header";
import Main from "./Main";
import NavShow from "./NavShow";
import Navs from "./Navs";
import Favorte from './Favorte';

import Complogo from "./Complogo";
import slides from './data';
import logg from './complog.json'
import Towjpg from "./Towjpg";
import Cardd from "./Cardd";
import cardprop from "./Carddata.json"
import Cardtow from "./Cardtow";
import Footer from "./Footer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Login';
import Basket from './Basket';
import Nestedroute from './Nestedroute';
import CollapsedSidePanel from './CollapsedSidePanel';
import Notification from './Notification';
import CounterHeader from './CounterHeader';
import Headroom from 'react-headroom';
import HHeadroom from './HHeadroom';
import ScrollNavbarExample from './ScrollNavbarExample';
import Search from './Search';



const Home = () => {



  return (
   

    <>
    
    
 


<BrowserRouter>
<Routes>
<Route path="/"  element={<>
  <Notification/>
<CounterHeader duraton={2*24*60*60*1000}/>

 <Header   cardprop={cardprop}/> 

 <CollapsedSidePanel />



<Navs/>

 
<Main  />
<NavShow slides={slides} />

<Complogo logg={logg} />
<Towjpg/>
<Cardd cardprop={cardprop}/>
<Cardtow/>

<Footer/>


</>
} />


<Route path="*"  element={<h1 className='not-found'>Not found</h1>} />

<Route path="/Navs"  element={<Navs/>} />
<Route path="/Towjpg"  element={<Towjpg/>} />

<Route path="/Favorte"  element={<Favorte/>} >

    <Route path='Nestedroute' element={<Nestedroute/>} />
    </Route>
    



   
    <Route path='/Login' element={<Login/>}/>
    
   
    

<Route path="/Basket"  element={<Basket/>} />






</Routes>



</BrowserRouter>


    
    
    
    
    </>
  )
}

export default Home