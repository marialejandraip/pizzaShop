import React, { useState, useEffect } from 'react'

import NavBar from '../components/Header';
import Footer from '../components/Footer';

import './Tracking.css';
import {snapshotGettingData} from '../firebaseFunction';

export default function Tracking() {
    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
      ]

      const [orderMaked, setOrderMaked]= useState([]);

      useEffect(()=>{
        const arrayData = [];
        snapshotGettingData('pizzas', arrayData, setOrderMaked);
      }, [])

    return (
        <div>
            <NavBar nav ={nav} />
            <div className="Banner-tracking"></div>
            <h1>Tracking</h1>
            <table className ="table-tracking">
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
                    {orderMaked.map((order, idx)=>(
                        <tr key ={idx}> 
                            <td>{order.pizzaName}</td>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.date}</td>
                            <td>
                                <ul>
                                {order.products.map((product, idx)=>(
                                    <li key={`${idx}`}>{product.producto}</li>
                                ))}
                                </ul>
                            </td>
                            <td>{order.totalOrder}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    )
};
