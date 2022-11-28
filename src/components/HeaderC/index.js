
import React from "react";
import { Link } from "react-router-dom";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HeaderC() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark text-white">
                <div className="container-fluid text-white">
                  
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        text-white
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                           
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/listaproductos" aria-current="page" href="#">
                                    Lista de Productos
                                </Link>
                            </li>
                         
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/compras" aria-current="page" href="#">
                                    Carrito
                                </Link>
                            </li>
                        </ul>
                        <FontAwesomeIcon icon={faCartShopping} />{" "}
                         <button id="boton-carrito"><i className="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span></button>
                       
                    </div>
                </div>
            </nav>


        </div>
    )



}