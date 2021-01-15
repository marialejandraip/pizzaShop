import React, { useState } from 'react';


export default function Ingredients({ ingredientes, setToppings, toppings, Data }) {

    const [checked, setChecked] = useState(false)
    const precio = Object.values(Data)
    console.log(precio)
    

    /* if(checkbox.checked === true){

    } */
    
    return (
        <div className="Container-products">
            {ingredientes.map((product, idx)=>(
                <label key={`${idx}`}>
                    <input type='checkbox' checked= {checked} onChange={(e) =>{setToppings([...toppings, {producto: product, precio:precio[idx].precio}]); console.log(checked)}}/>
                    {`${product}`}
                </label>
            ))}
        </div>
    )
}
