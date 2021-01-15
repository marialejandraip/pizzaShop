import React from 'react'

import NavBar from '../components/Header';
import Footer from '../components/Footer';

import './Tracking.css';
import {snapshotGettingData} from '../firebaseFunction';

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
            <table>
                <thead>
                <tr>
                    <th>Nombre de la pizza</th>
                    <th>Nombre Cliente</th>
                    <th>Teléfono Cliente</th>
                    <th>Fecha</th>
                    <th>Productos</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <Footer />
        </div>
    )
}
