import React from 'react';
import HeaderW from '../../components/HeaderW';
import Footer from '../../components/Footer';

function Login() {
  return (
    <>
      <HeaderW />

      <div className="row, mb-3">
        <div className="col-md-4 mx-auto">
          <div className="card mt-5 bg-success text-white rounded">
            <div className="card-header text-center pt-5">
              <h1 className="h4 text-white">Iniciar Sesión</h1>
            </div>
            <img
              className="rounded-circle mx-auto d-block logo m-4"
              src="https://colombiaestudia.com/wp-content/uploads/2021/07/logo_udenar.png"  height="110"
              alt="Logo" mt="2"
            />
            <div className="card-body">
              <form action="/login" method="POST">
                <div className="mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control bg-white text-white"
                    name="email"
                    placeholder="Email"
                    autofocus=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passswore">Password:</label>
                  <input
                    type="password"
                    className="form-control bg-white text-white"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className="btn btn-dark btn-block">Ingresar</button>
              </form>
              <p className="text-center">
              Aún no tienes cuenta?{" "}
              <a href="/registro" className="text-info">
                Registrarse
              </a>
            </p>
            </div>
         

          </div>
        </div>
        <div>
          <br></br>
        </div>
        <br></br>
      </div>
     
      <br></br>

      <Footer />

    </>


  );

}
export default Login;