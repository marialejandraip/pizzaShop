import React from 'react'

import NavBar from '../components/Header';
import Footer from '../components/Footer';

import './Tracking.css'

export default function Tracking() {

    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
      ]

    return (
        <div>
            <NavBar nav ={nav} />
            <div className="Banner-tracking"></div>
            <h1>Tracking</h1>
            <Footer />
        </div>
    )
}
