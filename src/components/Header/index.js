import React from "react";
import { Link } from "react-router-dom";
//import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Header() {
    return (
        <div>
        
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                   
                    <button
                        className="navbar-toggler"
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
                                <Link className="nav-link active text-white" to="/modificar" aria-current="page" href="#">
                                    Modificar Productos
                                </Link>
                            </li>
                               
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/ventas" aria-current="page" href="#">
                                    Lista de Ventas
                                </Link>
                            </li>
                           
                        </ul>
                        
                          
                  </div>
                </div>
            </nav>


        </div>
    )



}