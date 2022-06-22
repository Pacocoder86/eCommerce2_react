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

    producto.map((producto) => (


      <div className="parent app app-header">
        <div className="child">
          <div className="card">
            <img className="imagen" src={producto.image} alt={producto.product_name} />
            <p> {`Nombre: ${producto.product_name} `}</p>
            <p>{`Precio: $ ${producto.price} `}</p>
          </div>
        </div>
      </div>


    ))


  )
}
