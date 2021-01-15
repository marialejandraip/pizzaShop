import React, { useState, useEffect } from 'react'
import Data from '../assets/data/ingredients.json';

import NavBar from '../components/Header';
import Ingredients from '../components/Ingredients';
import Form from '../components/Form';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

import './MadePizza.css'
import {newPizza} from '../firebaseFunction';

export default function MadePizza() {
    const nav = [
        {route: '/', name:'Crear Pizza'}, 
        {route: '/Tracking', name:'Tracking'}
    ]

    const ingredientes = Object.keys(Data.ingredients);

    //Estados para ir actualizando el objeto de pedido
    const [pizzaName, setPizzaName] = useState('');
    const [toppings, setToppings] = useState([{producto:'Masa base', precio:10000}]);
    const [total, setTotal]= useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    //Fecha de la orden
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    //Estructura del pedido 
    let objOrder = {
        pizzaName: pizzaName,
        name: name,
        phone: phone,
        products: toppings,
        totalOrder: total,
        time: d,
        date: `${day}/${month+1}/${year}`,
    } 

   //Submit de la orden para actualizar el tracking de ordenes 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(objOrder)
        newPizza(objOrder)
        e.target.reset();
        setToppings([{producto:'Masa base', precio:10000}]);
    }

//El total depende de la cantidad de ingredientes que se le agregue a la pizza
    useEffect(() => {
        setTotal(toppings.reduce((finalTotal, { precio }) => finalTotal + precio, 0))
    }, [toppings, setToppings])

    return (
    <>
    <NavBar nav ={nav} />
    <div className="Banner-pizza"></div>
    <div className="Container-crearPizza">
        <h1>Crea tu pizza</h1>
        <form onSubmit={handleSubmit} >
            <label className="name-input">
            Nombre de la pizza:
              <input 
                type="text" 
                name="name" 
                className="Input-PizzaName" 
                placeholder='  Aquí el nombre de tu pizza' 
                onChange={(e)=>setPizzaName(e.target.value)} 
                />
            </label>
            <div className='Container-ingredientes'>
                <h2>Ingredientes</h2>

                <div className="Container-products">
                    {ingredientes.map((product, idx) =>(
                    <Ingredients 
                        key={`${idx}`}
                        product={product}
                        idx={idx}
                        ingredientes={ingredientes}
                        Data = {Data.ingredients}
                        setToppings ={setToppings}
                        toppings={toppings}
                    />
                    ))}
                </div>
            </div>
            <div className="container-last">

              <Form 
                pizzaName={pizzaName}
                setName ={setName}
                setPhone ={setPhone}
                day={day}
                month={month}
                year={year}
              />

              <Resume 
                toppings={toppings}
                total={total} 
              />
            </div>
        </form>
    </div>
    <Footer />
  </>
  )
};
