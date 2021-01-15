import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';

import './Header.css';

export default function Header({nav}) {
    return (
    <div className='Header-nav'>
        <div className='Nav-container'>
            { 
            nav.map((view, idx) => 
              <NavLink 
                key={`${idx} menu`}
                className='Nav'
                to={view.route}>
                {view.name}
              </NavLink>
          )}
            
        </div>
        <div className='Image-nav'>
            <img src={logo} alt='logo'/>
        </div>
    </div>
    )
}
