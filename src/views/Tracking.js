import React from 'react'

import NavBar from '../components/Header';
import Footer from '../components/Footer';

export default function Tracking() {

    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
      ]

    return (
        <div>
            <NavBar nav ={nav} />
            <Footer />
        </div>
    )
}
