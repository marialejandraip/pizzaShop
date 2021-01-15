import React, { useState } from 'react';

import {newPizza} from '../firebaseFunction';

export default function Form({ pizzaName, toppings, total }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let objOrder = {
        pizzaName: pizzaName,
        name: name,
        phone: phone,
        products: toppings,
        totalOrder: total,
        date: `${day}/${month+1}/${year}`,
    } 

    const handleSubmit = () => {

        newPizza(objOrder);
        setName('');
        setPhone('');
    }

    return (
        <div className="container-lastform">
        <h4>Para terminar tu pizza responde...</h4>
        <label> 
            <p>Nombre de la pizza: {pizzaName}</p>
        </label>
        <label> 
            Nombre: 
            <input 
            type="text" 
            name="name" 
            className="Input-Name" 
            placeholder='  María' 
            onChange ={(e)=>setName(e.target.value)} 
            />
        </label>
        <label> 
            Teléfono: 
            <input 
            type="text" 
            name="name" 
            className="Input-Phone" 
            placeholder='  3001112224'  
            onChange ={(e)=>setPhone(e.target.value)}
            />
        </label>
        <label> 
            
            <p>{`Fecha: ${day}/${month+1}/${year}`}</p>
        </label>
        <button className="button-form" >Guardar</button>
    </div>
    )
}
