import axios from "axios";
import { useEffect, useState } from 'react';
import "./EcomScreen.css";


export const EcomScreen = () => {

    const [producto, setproductos] = useState([])

    const getProductos = async () => {
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
        console.log('api', res.data);
        setproductos(res.data)
    }

    useEffect(() => {
        getProductos();
    }, [])


    return (

        <div className='App App-header'>
            {
                producto.map((producto) => (
                    <div className="parent">
                        <div className="card">
                            <div className="container">
                                <img className="imagen" src={producto.image} alt={producto.product_name} />
                                <div>
                                    <p key={producto._id}>
                                        <p> {`Nombre: ${producto.product_name} `}</p>
                                        <p>{`Precio: $ ${producto.price} `}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}