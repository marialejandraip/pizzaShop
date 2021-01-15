import React, {useState} from 'react';


export default function Ingredients({ product, idx, setToppings, toppings, Data}) {

    const [checked, setChecked] = useState(false)
    
    const precio = Object.values(Data)
    //Función para el manejo del array de productos con precio seleccionados cada que ocurre el evento
    const reviewChecked = (idx) => {
        setChecked(!checked)
        setToppings([...toppings, {producto: product, precio:precio[idx].precio, idx:idx}])
    }
    
    return (
        <>
            <label key={`${idx}`}>
                <input type='checkbox' nome ={product} checked= {checked} onChange={() =>{reviewChecked(idx)}}/>
                {`${product}`}
            </label>
        </>
    )
}
