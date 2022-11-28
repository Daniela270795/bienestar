import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram,  faWhatsapp} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div>
      <footer className="bg-success text-center text-white fixed-bottom">

        <div>
         © 2022 Copyright Universidad de Nariño  <br></br>

        Promocion de la Salud

        
          <br></br>
          <FontAwesomeIcon icon={faFacebook} />{" "}      
          <FontAwesomeIcon icon={faInstagram} />{" "}  
          <FontAwesomeIcon icon={faWhatsapp} />{" "}  
     
        
        </div>
     

      </footer>


    </div>
  )



}
export default Footer;