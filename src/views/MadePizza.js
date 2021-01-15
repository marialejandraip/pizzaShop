import React, { useState, useEffect } from 'react'
import Data from '../assets/data/ingredients.json';

import NavBar from '../components/Header';
import Ingredients from '../components/Ingredients';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import './MadePizza.css'

export default function MadePizza() {
    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
    ]

    const [pizzaName, setPizzaName] = useState('');
    const [toppings, setToppings] = useState([{producto:'Masa base', precio:10000}]);
    const [total, setTotal]= useState(0);

    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    
    const ingredientes = Object.keys(Data.ingredients);

    useEffect(() => {
        setTotal(toppings.reduce((finalTotal, { precio }) => finalTotal + precio, 0))
      }, [toppings, setToppings])

    return (
        <div>
            <NavBar nav ={nav} />
            <div className="Banner-pizza"></div>
            <div className="Container-crearPizza">
            <h1>Crea tu pizza</h1>
            <form>
                <label className="name-input">
                Nombre de la pizza:
                    <input type="text" name="name" className="Input-PizzaName" onChange={(e)=>setPizzaName(e.target.value)} />
                </label>
                <div className='Container-ingredientes'>
                  <h2>Ingredientes</h2>
                  <Ingredients 
                  ingredientes={ingredientes}
                  Data = {Data.ingredients}
                  setToppings ={setToppings}
                  toppings={toppings}
                  />
                </div>
                <div className="container-last">
                <div className="container-lastform">
                    <h4>Para terminar tu pizza responde...</h4>
                    <label> 
                        <p>Nombre de la pizza: {pizzaName}</p>
                    </label>
                    <label> 
                        Nombre: 
                        <input type="text" name="name" className="Input-Name" />
                    </label>
                    <label> 
                        Teléfono: 
                        <input type="text" name="name" className="Input-Phone" />
                    </label>
                    <label> 
                        
                        <p>{`Fecha: ${day}/${month+1}/${year}`}</p>
                    </label>
                    <button className="button-form">Guardar</button>
                </div>
                <Resume 
                toppings={toppings}
                total={total} 
                />
                </div>
            </form>
            </div>
            <Footer />
        </div>
    )
}
