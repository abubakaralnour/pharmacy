import React from 'react'
import Header from "./Header";
import Navs from "./Navs";
import Footer from './Footer';
import { Link,Outlet ,Navigate} from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
const Favorte = () => {
  return (
    <>
    <Header/>  
    < Navs/>
    <div className='under-progrees'>
      <Link to="Nestedroute"><h1>iam test route</h1></Link>
    <h1>this is Favorte page under pogrees</h1>
<a href='https://www.google.com'>clck her</a>    </div>
    <Outlet/>

    <Footer/>
    </>
  )
}

export default Favorte