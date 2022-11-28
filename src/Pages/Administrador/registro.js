import React from 'react';
import HeaderW from '../../components/HeaderW';
import Footer from '../../components/Footer';
//border border-dark
function Registro() {
    return (
        <>
        <HeaderW />
        
        <div className="row, mb-3">
  <div className="col-md-4 mx-auto">
    <div className="card mt-5 bg-success text-white rounded">
      <div className="card-header text-center pt-5">
        <h4 className="text-center">Registrarse</h4>
      </div>
      <div className="card-body">
        <form action="/registro" method="POST">
          <div className="mb-3">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              className="form-control bg-white "
              name="name"
              placeholder="Nombre"
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control bg-white text-white"
              name="email"
              placeholder="email@gmail.com"
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control bg-white text-white"
              name="password"
              placeholder="Password"
         
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password">Cofirm Password:</label>
            <input
              type="password"
              className="form-control bg-white text-white"
              name="confirm_password"
              placeholder="Confirm Password"
             
            />
          </div>
          <button className="btn btn-dark btn-block">Registrarse</button>
        </form>
        <p className="text-center">
        Actualmente tienes cuenta?
        <a href="/login" className="text-info">
          Login
        </a>
      </p>
      </div>
     
    </div>
    <br></br>
  </div>
  <br></br>
</div>
<br></br>


            <Footer />

      </>


    );

}
export default Registro;