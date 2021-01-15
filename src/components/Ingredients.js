import React, { useState } from 'react';


export default function Ingredients({ product, idx, setToppings, toppings, Data }) {

    const [checked, setChecked] = useState(false)
    const precio = Object.values(Data)
    

    /* if(checkbox.checked === true){

    } */
    
    return (
        <div>
                <label key={`${idx}`}>
                    <input type='checkbox' checked= {checked} onChange={(e) =>{setToppings([...toppings, {producto: product, precio:precio[idx].precio}]); setChecked(true);}}/>
                    {`${product}`}
                </label>
        </div>
    )
}
