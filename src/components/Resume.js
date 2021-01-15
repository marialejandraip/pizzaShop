import React from 'react'

import './Resume.css'

export default function Resume({ toppings, total}) {

    return (
        <div className={"Resumen"}>
            <h3>Resumen</h3>
            <table>
                <tr>
                    <th>Ingredientes</th>
                    <th>Precio</th>
                </tr>
                {toppings.map((topping,idx) =>(
                    <tr>
                        <td key ={`${idx} topping`}>{topping.producto}</td>
                        <td key ={`${idx} price`}> $ {topping.precio}</td>
                    </tr>
                ))}
                <tr>
                    <th>Total</th>
                    <th>$ {total} </th>
                </tr>
            </table>
        </div>
    )
}
