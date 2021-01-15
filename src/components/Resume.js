import React from 'react';

import './Resume.css';

export default function Resume({ toppings, total }) {

    return (
        <div className={"Resumen"}>
            <h3>Resumen</h3>
            <table>
                <thead>
                <tr>
                    <th>Ingredientes</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
                {toppings.map((topping,idx) =>(
                    <tr key={`${idx} row`}>
                        <td key ={`${idx} topping`}>{topping.producto}</td>
                        <td key ={`${idx} price`}> $ {topping.precio}</td>
                    </tr> 
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <th>Total</th>
                    <th>$ {total} </th>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}
