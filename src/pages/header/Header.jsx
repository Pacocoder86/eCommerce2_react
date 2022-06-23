import React from "react";
import { InputValue } from "../InputValue/InputValue";

import "./header.css";

export default function Header({ producto, setproductos, getdata }) {
    return (
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <InputValue producto={producto} setproductos={setproductos} getdata={getdata} />
                <a className="ai" href="/">Inicio</a>
                <a className="ah" href="/">Hoy</a>
                <a className="aho" href="/">home</a>
            </div>
        </div>
    );
}