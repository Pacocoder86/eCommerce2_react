import axios from "axios";
import { useEffect, useState } from 'react';
import "./EcomScreen.css";


export const EcomScreen = () => {

    const [producto, setproductos] = useState([])

    const getProductos = async () => {
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
        //console.log('api', res.data);
        let tempData = []; //grupo de 12 
        let grupos = [];  // [ [{12}],[{12}],]
        for (let j = 0; j < res.data.length; j++) {
            for (let i = 0; j % 12 === 0; i++) {
                //console.log(res.data[j])
                tempData.push(res.data[j])
            }
            grupos.push(tempData)
            tempData = [];
        }

        console.log(tempData);
        setproductos(tempData)
    }

    useEffect(() => {
        getProductos();
    }, [])


    return (

        <div className='App App-header'>
            {
                producto.map((producto) => (
                    <div className="parent">
                        <div className="container">
                            <div>
                                <img className="imagen" src={producto.image} alt={producto.product_name} />
                            </div>
                            <div>
                                <p key={producto._id}>
                                    <p>{`Nombre: ${producto.product_name} `}</p>
                                    <p>{`Precio: $ ${producto.price} `}</p>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
