import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import  {isAuthenticated} from "../auth"

const Menu = ()=>
(
    <div>
    <ul className='nav nav-tabs bg-primary'>
           <NavLink className='nav-link'  Navigate to="/" >Home</NavLink>
{
    !isAuthenticated() && (
        <Fragment>
            <NavLink className='nav-link' Navigate to="/signin">Login</NavLink>
            <NavLink className='nav-link' Navigate to="/signup">Register</NavLink>
        </Fragment>
    )
}
           <NavLink className='nav-link'  Navigate to="/dashboard">Dashboard</NavLink>
           
   </ul> 
   </div>
);
   
export default Menu ;


