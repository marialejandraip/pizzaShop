import React from 'react'

import NavBar from '../components/Header';

export default function Tracking() {

    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
      ]

    return (
        <div>
            <NavBar nav ={nav} />
            
        </div>
    )
}
