import { useState } from 'react';
import logo from '../../dist/logo.png';
import { Link, useLoaderData } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useAuth from '../utils/useAuth';

//LOGO
const Title=()=>{

    return(<Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>);
  
}

//HEADER Component
const Header_component = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isLoggedIn = useAuth();
  // const [getLocalVariable, setLocalVariable] = useLoacalStorage();

  const isOnline = useOnline();

    return(
      <div className="header">
        {/* Title import in Header*/}
        <Title/>
        {/* navbar */}
        <div className="nav-bar">
          <ul>
            <li>
              <Link  className='link' to="/">Home</Link>
            </li>
            <li>
              <Link  className='link' to="/about">About us</Link>
            </li>
            <li>
              <Link  className='link' to="/contact">Contact us</Link>
            </li>
            <li>Cart</li>
            <li>
              <Link className='link' to="/instamart">InstaMart</Link>
            </li>
          </ul>
        </div>
        <h1>{isOnline ? "online" : "offline"}</h1>
        {isLoggedIn ? (
          <button color='black' onClick={()=> setIsLoggedIn(false)}>Logout</button> 
        ) : (
          <button color='black' onClick={()=> setIsLoggedIn(true)}>Login</button>
        )}  
      </div>
    );
}

export default Header_component;