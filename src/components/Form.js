import React from 'react';

//Formulario final de nombre y telefono 
export default function Form({ pizzaName, setName, setPhone , day, month, year }) {
    
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
        <button type="submit" className="button-form" >Guardar</button>
    </div>
    )
}
