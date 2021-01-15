import React, { useState} from 'react';


export default function Ingredients({ product, idx, setToppings, toppings, Data }) {

    const [checked, setChecked] = useState(false)
    const precio = Object.values(Data)
    
    const reviewChecked = (checked, idx) => {
        setChecked(!checked);
        console.log(checked)
        if(checked === true){
            setToppings(toppings.filter((p,index) => p.idx !== product.idx))
        }
        setToppings([...toppings, {producto: product, precio:precio[idx].precio, idx:idx}])
    }
    
    
    return (
        <>
                <label key={`${idx}`}>
                    <input type='checkbox' nome ={product} checked= {checked} onChange={() =>{reviewChecked(checked,idx)}}/>
                    {`${product}`}
                </label>
        </>
    )
}
